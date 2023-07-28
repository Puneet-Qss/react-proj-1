import Navbar from "./component/Navbar/Navbar";
import './App.css';
import MainComponent from "./component/MainComponent/MainComponent";
import Footer from "./component/Footer/Footer";
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <MainComponent />
      <Sidebar />
      <Footer/>
    </>
  );
}
export default App;
