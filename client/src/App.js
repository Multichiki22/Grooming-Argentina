import "./App.css";
import NavBar from "./components/Pages/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/Pages/About/About";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import NewsDetail from "./components/NewDetails/NewDetails";
import Volunteer from "./components/Pages/Volunteer/Volunteer";
import Login from "./components/Pages/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
// import Register from "./components/Pages/Register/Register";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/voluntariado">
        <Volunteer />
      </Route>
      <Route exact path="/contactanos">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      {/* <Route exact path="/register">
        <Register />
      </Route> */}
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/noticias">
        <News />
      </Route>
      <Route exact path="/noticias/:id">
        <NewsDetail />
      </Route>
      <Route exact path="/nosotros">
        <About />
      </Route>
    </div>
  );
}

export default App;
