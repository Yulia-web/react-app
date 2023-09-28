import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
  const {user} = useContext(Context)

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, element }, key) => 
        <Route exact path={path} element={element} key={key} />
      )}
      {publicRoutes.map(({ path, element }, key) =>
        <Route exact path={path} element={element} key={key} />
      )}
    </Routes>
  );
}

export default AppRouter;