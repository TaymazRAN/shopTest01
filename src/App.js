import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Slideshow from './components/Slideshow';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />      
      <Slideshow />
      <Card />
      <Footer />
   
    </>
  );
}

export default App;
