import NavBar from "../src/Components/NavBar";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import About from "../src/Components/About";
import Features from "../src/Components/Features";
import Demo from "../src/Components/Demo";
import Team from "../src/Components/Team";
import ScrollToTop from "../src/Components/ScrollToTop";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function App() {
  return (
    <>
      <NavBar />
      <Header />

      <main>
        {/* <About /> */}
        <Features />
        {/* <Demo /> */}
        <Team />
      </main>
      <ScrollToTop>
        <Fab color="primary" size="small" aria-label="scroll to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
