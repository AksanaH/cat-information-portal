import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import AboutCats from './components/AboutCatsSection'

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
  padding: 20px;
`;

const StyledBody = styled.div`
  background-image: url("/images/background.jpg");
  background-size: cover;
  min-height: 100vh;
  color: white;
`;