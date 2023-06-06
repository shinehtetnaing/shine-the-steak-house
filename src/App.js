import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import MenuLayout from "./Layouts/MenuLayout";

// Pages
import Home, { loader as bestMenuLoader } from "./Pages/Home";
import About from "./Pages/About";
import Menu, { loader as menuLoader } from "./Pages/Menu";
import MenuDetails, { loader as menuDetailLoader } from "./Pages/MenuDetails";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={bestMenuLoader} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<MenuLayout />}>
        <Route index element={<Menu />} loader={menuLoader} />
        <Route path=":id" element={<MenuDetails />} loader={menuDetailLoader} />
      </Route>
      <Route path="reservation" element={<Reservation />} />
      <Route path="contact" element={<Contact />} />
      <Route path="your-cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
