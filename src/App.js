import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Home from "./components/Home";
// import Welcome from "./components/Welcome";
// import Event from "./components/Event";
// import Login from "./components/Login";
// import CarLIst from "./components/CarLIst";
import ComA from "./components/TestCss/ComA";
import ComB from "./components/TestCss/ComB";
// import Counter from "./components/Counter";
import Register from "./components/Register";
import MenuMain from "./components/MenuMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
// import Header from "./components/Header";
// import Slideshow from './components/Slideshow';
// import Card from './components/Card';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Routes>
          {/* <Route path="/" element={<MenuMain />}> */}{" "}
          <Route index element={<MenuMain />} />
          <Route path="regiter" element={<Register />} />{" "}
          <Route path="*" element={<NoPage />} />{" "}
        </Routes>{" "}
      </BrowserRouter>

      <ComA />
      <ComB />
    </>
  );
}

export default App;
