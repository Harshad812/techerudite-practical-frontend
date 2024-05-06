import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLogin, Home, Login, Registration } from "./container";
import { RootState } from "./redux/store";

enum MainPages {
  HOME = "/",
}

enum AuthPage {
  ROOT = "/",
  LOGIN = "/login",
  REGISTRATION = "/register",
  ADMIN_LOGIN = "/admin/login",
  ADMIN_REGESTER = "/admin/register",
}

export const Router = () => {
  const authDetails = useSelector((state: RootState) => state.auth);
  const isLogin = authDetails.isLoggedIn;

  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {isLogin ? (
          <>
            <Route path={MainPages.HOME} element={<Home />} />
          </>
        ) : (
          <>
            <Route path={AuthPage.ROOT} element={<Login />} />
            <Route path={AuthPage.ADMIN_LOGIN} element={<Login />} />
            <Route path={AuthPage.LOGIN} element={<Login />} />
            <Route path={AuthPage.ADMIN_REGESTER} element={<Registration />} />
            <Route path={AuthPage.REGISTRATION} element={<Registration />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
