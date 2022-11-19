import HeadBar from './HeadBar';
import Aboutme from './Aboutme';
import Services from './Services';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Projects from './Projects';
function HomePage(){

    return(
      <>
        <HeadBar/>
        <Aboutme/>
        <Services/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
      </>
    )
}
export default HomePage;