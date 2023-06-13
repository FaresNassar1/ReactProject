import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
import { Container } from "./Components/index";
import { Header, Footer } from "./sections/index.js";
import { Home, Profile } from "./Pages/index";

function App() {
  return (
    <>
      <Router>

        <Header />
        <Container>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>

        </Routes>
        </Container>
        <Footer />

      </Router>
    </>
  );
}

export default App;
