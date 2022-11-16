import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import {useDrawerContext} from "../shared/contexts"


export const AppRoutes = () => {

  const {toogleDrawerOpen} = useDrawerContext()
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toogleDrawerOpen}>
            Toogle Menu
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="pagina-inicial" />} />
    </Routes>
  );
};
