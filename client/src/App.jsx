import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/index";
import { Footer, Header } from "./container/index";


const App = () => (
  
    
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
  
  )


export default App;
