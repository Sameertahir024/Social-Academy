import "./App.css";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Test from "./components/Test";
import Trust from "./components/Trust";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Courses />
      <Categories />
      <Test />
      <Platform />
    </>
  );
}

export default App;
