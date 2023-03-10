import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import MenuLayout from "./Layouts/MenuLayout";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import MenuDetails from "./Pages/MenuDetails";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<MenuLayout />}>
        <Route index element={<Menu />} />
        <Route path=":id" element={<MenuDetails />} />
      </Route>
      <Route path="reservation" element={<Reservation />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
