import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Main from "../pages/HomePage/Main";
import Certificaions from "../components/About/AboutInfoComp/Certificaions";
import Education from "../components/About/AboutInfoComp/Education";
import Skills from "../components/About/AboutInfoComp/Skills";


const AppRouter = () => {

    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificaions" element={<Certificaions />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    );
}

export default AppRouter;
