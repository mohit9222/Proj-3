import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          {/* <Hero /> */}
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
