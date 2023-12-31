import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/portifolio_Hechellin" element={<Hero />} />
          <Route path="/who" element={<Who />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
