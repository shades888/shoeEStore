import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Footer, Header } from "./container";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Header />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
