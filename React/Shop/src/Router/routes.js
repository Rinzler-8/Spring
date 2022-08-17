import { Route, Routes } from "react-router-dom";
import LoginPage from "../Page/LoginPage";
import HomePage from "../Page/HomePage";
import AdminPage from "../Page/AdminPage";
import RegisterPage from "../Page/RegisterPage";
import NotFoundPage from "../Page/NotFoundPage";
import AuthenRoute from "../AuthenRoute/AuthenRoute";
import ProductPage from "./../Page/ProductPage";

// // List route trong chương trình, Trong TH tích hợp API có thể dùng luôn
// const routeList = [
//   {
//     path: "/login",
//     exact: true,
//     component: () => <LoginPage />, // Sử dụng hàm arrow để sau này có thể có những route có tham số thì có thể truyền vào luôn
//   },
//   {
//     path: "/home",
//     exact: true,
//     element: () => <HomePage />,
//   },
//   {
//     path: "/admin",
//     exact: true,
//     element: () => {
//       <AdminPage />;
//     },
//     authen: true,
//   },
//   {
//     path: "/register",
//     exact: true,
//     element: () => <RegisterPage />,
//   },
//   {
//     path: "",
//     exact: false,
//     element: () => <NotFoundPage />,
//   },
// ];

// // Hàm tạo ra Switch Route
// let generateRouteMenus = (routeListParam) => {
//   // Lặp qua từng phần tử trong list để tạo ra các tuyến route tương ứng
//   let routeResult = routeListParam.map((route, index) => {
//     if (route.authen) {
//       return <AuthenRoute key={index} path={route.path} exact={route.exact} ComponentAuthen={AdminPage} />;
//     }

//     <Routes key={index} path={route.path} exact={route.exact} element={route.element} />;
//   });

//   return (
//     <Routes>
//       {routeResult}

//     </Routes>
//   );
// };
// // Export routes để sử dụng bên App
// export const routes = generateRouteMenus(routeList);

export const routes = (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
