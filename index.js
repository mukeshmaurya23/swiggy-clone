import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/pages/About";
import Contact from "./src/components/pages/Contact";
import Login from "./src/components/pages/Login";
import Signup from "./src/components/pages/Logout";
import RestaurantMenu from "./src/components/pages/RestaurantMenu";
import InstaMart from "./src/components/InstaMart";
import UserContext from "./utils/UserContext";
import { CartContextProvider } from "./utils/CartContext";
import CartItem from "./src/components/pages/CartItem";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import MyDemoSearch from "./src/components/MyDemoSearch";
import NotUSEIndex from "./src/components/NotUSEIndex";
//import NotUSEIndex from "./src/components/NotUSEIndex";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "main-heading",
//   },
//   "Hello World"
// );

// const paragraph = React.createElement(
//   "p",
//   {
//     id: "main-paragraph",
//     style: {
//       color: "red",
//       fontSize: "20px",
//     },
//   },
//   "This is a paragraph"
// );
// const heading3 = <h3>Heading 3</h3>;
// const container = React.createElement(
//   "div",
//   {
//     id: "main-container",
//   },
//   [heading, paragraph, heading3]
// );

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Mukesh Maurya",
    email: "mukesh@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <CartContextProvider>
          <Header />
          <Outlet />

          <Footer />
        </CartContextProvider>
      </UserContext.Provider>
    </Provider>
  );
};

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/logout",
//         element: <Signup />,
//       },
//       {
//         path: "/instamart",
//         element: <InstaMart />,
//       },
//       {
//         path: "/cartitems",
//         element: <CartItem />,
//       },

//       {
//         path: "/restaurant/:id",
//         element: <RestaurantMenu />,
//       },
//     ],
//   },
// ]);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <NotUSEIndex />,
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NotUSEIndex />);
root.render(<RouterProvider router={Router} />);
