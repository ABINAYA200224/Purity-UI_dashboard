

import "./App.css";
// import Header from "./components/Header";
import Navbar from "./components/navcard/Navbar";

import Sheet from "./components/Sheetcomponent/Sheet";
import Uidashboard from "./components/Uidashboard";
import Workrockets from "./components/Workrockets";




import Mainsales from "./components/Sales/Mainsales";

import Order from "./components/Orders/Order";
// import Active from "./components/Activeuserfile/Activeusers";
import Projects from "./components/Projects/Projects";
// import Header from "./components/Header";
import Active from "./components/Activeuserfile/Activeusers";
import Header from "./components/Header";

// import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <div className="flex">
      <div>
        <Navbar />
      </div>

      <div>
        <Header/>

        <Sheet />
        <div className="flex gap-[20px]">
          <div>
          <Uidashboard />
          </div>
          <div className="flex justify-center items-center">
          <Workrockets />
          </div>
        
        </div>
        <div className="flex">
          <Active/>
          <Mainsales/>
        </div>
        <div>
          <div className="flex">
          <Projects/>
          <Order/>
          </div>

          {/* <Footer/> */}
    
      </div>
      </div>
           
      
      </div>
    </>
  );
}

export default App;
