import NavBar from './components/NavBar'
import AboutCats from './components/AboutCatsSection'
import Search from './components/Search'
import RandomCat from './components/RandomCat';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";


function App() {
  return (
    <StyledApp>
      <NavBar />
      <StyledBody>
        <AboutCats />
        <Search />
        <RandomCat />
      </StyledBody>

    </StyledApp>
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