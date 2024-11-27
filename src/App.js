import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className=" page-padding ">
        <Routing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
