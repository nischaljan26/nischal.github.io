import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import About from "./components/about"
import Experience from "./components/experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Interests from "./components/Interests"
import MyProjects from "./components/MyProjects"
import AddMe from "./components/AddMe"


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container-fluid p-0">
        <Route path = "/" exact component={About} />
        <Route path = "/experience" component={Experience} />
        <Route path = "/education" component={Education} />
        <Route path = "/addme" component={AddMe} />
        <Route path = "/my-projects" component={MyProjects} />
        <Route path = "/interests" component={Interests} />
        <Route path = "/skills" component={Skills} />
      </div>
    </Router>
  );
}

export default App;
