import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import AboutCats from './components/AboutCatsSection'
// import Search from './components/Search'
// import RandomCat from './components/RandomCat';
import CatBreeds from "./components/CatBreedsPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";


function App() {
  return (
    <Router>
      <StyledApp>
        <NavBar />
        <StyledBody>
          <Routes>
            <Route path="/" element={<AboutCats />} />
            <Route path="/breeds" element={<CatBreeds />} />
          </Routes>
        </StyledBody>
      </StyledApp>
    </Router>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
  font-family: "Gill Sans Extrabold", sans-serif;
`;

const StyledBody = styled.div`
  background-image: url("/images/background.jpg");
  background-size: contain;
  background-repeat: no-repeat;  
  color: white;
  min-height: 2800px;
`;