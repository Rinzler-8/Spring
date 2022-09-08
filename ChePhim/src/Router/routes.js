import { Route, Routes } from "react-router-dom";
import LoginPage from "../Page/LoginPage";
import HomePage from "../Page/HomePage";
import AdminPage from "../Page/AdminPage";
import RegisterPage from "../Page/RegisterPage";
import NotFoundPage from "../Page/NotFoundPage";
// import AuthenRoute from "../AuthenRoute/AuthenRoute";
import ForgotPasswordPage from "./../Page/ForgotPasswordPage";
import { AdminAuth, WithAuth, WithNav, WithoutNav } from "../HOC/AdminAuth";


export const routes = (
  <Routes>
    <Route element={<WithoutNav />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>

    <Route element={<WithNav />}>
      <Route element={<AdminAuth />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route element={<WithAuth />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
    </Route>
  </Routes>
);

// List route trong chương trình, Trong TH tích hợp API có thể dùng luôn
// const routeList = [
//   {
//     path: "/login",
//     exact: true,
//     component: () => <LoginPage />, // Sử dụng hàm arrow để sau này có thể có những route có tham số thì có thể truyền vào luôn
//   },
//   {
//     path: "/home",
//     exact: true,
//     component: withAuth(HomePage),
//   },
//   {
//     path: "/admin",
//     exact: true,
//     component: withAuth(AdminPage),
//     authen: true,
//   },
//   {
//     path: "/register",
//     exact: true,
//     component: withAuth(RegisterPage),
//   },
//   {
//     path: "",
//     exact: false,
//     component: NotFoundPage,
//   },
// ];

// export const routes = (
//   <Routes>
//     <Route path="/home" element={<HomePage />} />
//     <Route path="/admin" element={<AdminPage />} />

//     <Route path="/register" element={<RegisterPage />} />
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/forgot" element={<ForgotPasswordPage />} />
//     <Route path="*" element={<NotFoundPage />} />
//   </Routes>
// );

// export const routes = {
//   name: "Auth",
//   children: [
//     {
//       path: "/login",
//       name: "Sign In",
//       component: LoginPage,
//     },
//     {
//       path: "/auth/sign-up",
//       name: "Sign Up",
//       component: RegisterPage,
//     },
//     {
//       path: "/admin",
//       name: "404 Page",
//       component: AdminPage,
//     },
//   ],
// };
