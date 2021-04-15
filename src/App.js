import NavBar from "../src/Components/NavBar";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import About from "../src/Components/About";
import Features from "../src/Components/Features";
import Demo from "../src/Components/Demo";
import Team from "../src/Components/Team";

function App() {
  return (
    <>
      <NavBar />
      <Header />

      <main>
        {/* <About /> */}
        <Features />
        <Demo />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
