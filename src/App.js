import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Event from "./components/Event";
import Login from "./components/Login";
import CarLIst from "./components/CarLIst";
// import Header from "./components/Header";
// import Slideshow from './components/Slideshow';
// import Card from './components/Card';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <Header />      
      <Slideshow />
      <Card />
      <Footer /> */}
      {/* <Home color={"Red"} back={"black"} />
      <Welcome name={"sara"} />

      <Event /> */}
      {/* <Login level={"tttt"} /> */}
      <CarLIst />
    </>
  );
}

export default App;
