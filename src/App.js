import Achievement from "./components/Achievement";
import CallToAction from "./components/CallToAction";
import Category from "./components/Category";
import Comments from "./components/Comments";
import CourseSlider from "./components/CourseSlider";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sponsors />
      <CourseSlider />
      <Achievement />
      <Category />
      <Comments />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
