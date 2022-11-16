import { createContext, useCallback, useState, useMemo, useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "../../shared/themes";
import { Box } from "@mui/system";
interface IThemeContextData {
  themeName: "light" | "dark";
  toogleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);


export const useAppThemeContext = ()=>{
    return useContext(ThemeContext)
}
export const AppThemeProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toogleTheme = useCallback(() => {
    setThemeName((oldTHemeName) =>
      oldTHemeName === "light" ? "dark" : "light"
    );
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;
    return DarkTheme;
  }, [themeName]);
  return (
    <ThemeContext.Provider value={{ themeName, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width={"100vw"}
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
