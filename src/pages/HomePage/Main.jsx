import About from '../../components/About/About';
import ProjectsSection from '../../components/ProjectsInfo/Projects';
import HomePageHeader from './HomePageHeader/HomePageHeader';
import InfoMe from './InfoMe/InfoMe';
import Contact from '../../components/Contact/Contact';
import './main.css';

const Main = () => {
    return (
      <div>
        <HomePageHeader />
        <InfoMe />
        <About />
        <ProjectsSection />
        <Contact />
      </div>
    );
}

export default Main;
