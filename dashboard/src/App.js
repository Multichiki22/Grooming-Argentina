import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Bienvenidos from "./components/pages/Bienvenidos/Bienvenidos";
import PersistLogin from "./components/PersistLogin/PersistLogin";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Login from "./components/pages/Login/Login";
import Unauthorized from "./components/pages/Unauthorized/Unauthorized";
import DownloadButton from "./components/downloadButton/downloadReportButton";
import ManageBlogs from "./components/pages/ManageBlogs/ManageBlogs";
import ManageBlogsById from "./components/pages/ManageBlogsById/ManageBlogsById";
import ManageNewsById from "./components/pages/ManageNewsById/ManageNewsById";
import ManageNews from "./components/pages/ManageNews/ManageNews";
import Suscriptores from "./components/pages/Sustcriptors/Suscriptors";
import Profile from "./components/pages/Profile/Profile";
import Students from "./components/Students/Students/Students";
import ManageVolunteers from "./components/pages/ManageVolunteers/ManageVolunteers";
import CreateNew from "./components/CreateNew/CreateNew";
import StudentsPlayer from "./components/Students/StudentsPlayer/StudentsPlayer";
import PasswordRecovery from "./components/pages/passwordRecovery/PasswordRecovery";
import PasswordReset from "./components/pages/passwordReset/PasswordReset";
import PreStudents from "./components/Students/PreStudents/PreStudents";
import CreateNewUser from "./components/pages/CreateNewUser/CreateNewUser";
import DeleteUser from "./components/pages/DeleteUser/DeleteUser";
import CreateCourse from "./components/Students/CreateCourse/CreateCourse";
import Footer from "./components/Footer/Footer";
import Denounces from "./components/pages/Denounces/Denounces";
import MyBlogs from "./components/pages/MyBlogs/MyBlogs";

const noNav = ["/", "/unauthorized", "/recuperar", "/recuperar/:token"];
function App() {
  const location = useLocation().pathname;
  return (
    <div className="App">
      {!noNav.includes(location) && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/unauthorized" element={<Unauthorized />} />
        <Route exact path="/recuperar" element={<PasswordRecovery />} />
        <Route exact path="/recuperar/:token" element={<PasswordReset />} />
        <Route element={<PersistLogin />}>
          <Route
            element={
              <RequireAuth
                allowedRoles={["user", "admin", "hr", "volunteer", "editor"]}
              />
            }
          >
            <Route path="/panel/bienvenidos" element={<Bienvenidos />} />
            <Route exact path="/panel/crearblog" element={<CreateBlog />} />
            <Route exact path="/panel/misblogs" element={<MyBlogs />} />
            <Route path="/panel/profile" element={<Profile />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["admin", "hr"]} />}>
            <Route exact path="/panel/reportes" element={<DownloadButton />} />
            <Route path="/panel/voluntarios" element={<ManageVolunteers />} />
            <Route
              exact
              path="/panel/suscriptores"
              element={<Suscriptores />}
            />
          </Route>
          <Route element={<RequireAuth allowedRoles={["admin", "editor"]} />}>
            <Route exact path="/panel/crearNoticia" element={<CreateNew />} />
            <Route path="/panel/noticias" element={<ManageNews />} />
            <Route path="/panel/noticias/:id" element={<ManageNewsById />} />
            <Route path="/panel/blogs" element={<ManageBlogs />} />
            <Route path="/panel/blogs/:id" element={<ManageBlogsById />} />
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["admin", "volunteer"]} />}
          >
            <Route path="/panel/cursos" element={<Students />} />
            <Route path="/panel/cursos2" element={<PreStudents />} />
            <Route path="/panel/cursos/:id" element={<StudentsPlayer />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/panel/crearcurso" element={<CreateCourse />} />
            <Route path="/panel/nuevousuario" element={<CreateNewUser />} />
            <Route path="/panel/BorrarUsuario" element={<DeleteUser />} />
            <Route path="/panel/denuncias" element={<Denounces />} />
          </Route>
        </Route>
      </Routes>
      {location === "/" ? null : <Footer />}
      <div className="disclaimer">
        <p className="textDisclaimer">
         <b>Esta pagina es solo una DEMO Y no contiene informacion real</b> 
        </p>
        <div className="linkContainer">
          <a
            className="Links"
            href="https://github.com/Multichiki22/Grooming-Argentina"
            target="blank"
          >
            Github and Login information
          </a>
          <a
            className="Links"
            href="https://grooming-argentina-client-demo.vercel.app/"
            target="blank"
          >
            Client
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
