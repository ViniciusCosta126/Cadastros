import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts";

export const MenuLateral: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toogleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        variant={smDown ? "temporary" : "permanent"}
        open={isDrawerOpen}
        onClose={toogleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          display="flex"
          flexDirection="column"
          height={"100%"}
        >
          <Box
            width={"100%"}
            height={theme.spacing(20)}
            display={"flex"}
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              alt="Vinicius Costa"
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFpUgqzRmXBvg/profile-displayphoto-shrink_400_400/0/1653961954578?e=1674086400&v=beta&t=uc4BATMa709o-DxBsBF1_-NPlo4qVxQXS0wP8fbrDnw"
            />
          </Box>

          <Divider />
          <Box flex={1}>
            <List component={"nav"}>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Pagina Incial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height={"100vh"} marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
