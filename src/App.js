import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Skilles from "./components/skilles/Skilles";
import MyWorks from "./components/works/MyWorks";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Skilles />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
