import './Projects.css';
import {Link} from 'react-router-dom';

function Projects(){
    return(
        <>
            <section className='projectcontainer'>
                <h1 id='project-header'>Projects</h1>
                <p>This are some of the project that i work on or currently working on</p>
                <div className='projects'>
                    <div>
                        <img src={require('../img/project-capture.PNG')}/>
                        <h1 id='project-title'>Cloned Ecommerce Site</h1>
                        <Link to='www.facebook.com' className='sourcelink'>
                            <div>
                                <i class='bx bxl-github' id='github'></i>
                                <h5>Link to source code</h5>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img src={require('../img/portfolio.PNG')}/>
                        <h1 id='project-title'>Portfolio Site</h1>
                        <Link to='www.facebook.com' className='sourcelink'>
                            <div>
                                <i class='bx bxl-github' id='github'></i>
                                <h5>Link to source code</h5>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img src={require('../img/airlineimage.PNG')}/>
                        <h1 id='project-title'>Airline Booking Site</h1>
                        <Link to='www.facebook.com' className='sourcelink'>
                            <div>
                                <i class='bx bxl-github' id='github'></i>
                                <h5>Link to source code</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;