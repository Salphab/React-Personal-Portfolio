import './HeadBar.css';
import {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

function HeadBar(){
    const sidebar = useRef('null');
    useEffect(()=>{
        document.title = 'Welcome I am Ibrahim Badmus Abdulfatah | Personal Portfolio';
    },[])
    return(
        <>
            <section id='headercontainer'>
                <div  className='shortinfo'>
                    <p className='heading'>Hello !</p>
                    <p id='headbody'>I am <span>Badmus Ibrahim Abdulfatah</span> a fullstack web developer working both on frontend and backend development,
                    i create responsive web pages and scalable web application for business solution. I translate business requirement into codes. 
                    </p>
                    <div id='medialink'>
                        <ul>
                            <li><a href="https://web.facebook.com/ibrahimm.badmus"><i class='bx bxl-facebook'></i></a></li>
                            <li><a href="https://www.linkedin.com/in/badmus-ibrahim-abdulfatah-80aab5241/"><i class='bx bxl-linkedin-square'></i></a></li>
                            <li><a href="https://twitter.com/ibrahimbadmus3"><i class='bx bxl-twitter' ></i></a></li>
                            <li><a href="https://github.com/Salphab?tab=repositories"><i class='bx bxl-github'></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='titlecontainer'>
                    <ul>
                        <li><a href='#aboutme'>About</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#aboutme'>Resume</a></li>
                        <li><a href='#project-header'>Project</a></li>
                        <li><a href='#contactheader'>Contact</a></li>
                    </ul>
                </div>
                <div className='catcontainer'>
                    <button type='button' onClick={(e)=>{
                        e.preventDefault();
                            if(sidebar.current.style.right === ''){
                                sidebar.current.style.right = '0%';
                            }
                            else if(sidebar.current.style.right === '0%'){
                                sidebar.current.style.right = '-50%';
                            }
                            else sidebar.current.style.right = '0%';
                            
                        
                    }}><i class='bx bxs-category-alt'></i></button>
                </div>
                
                <div id='sidebar' ref={sidebar}>
                    <ul>
                        <li><a href='#aboutme'>About</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#aboutme'>Resume</a></li>
                        <li><a href='#project-header'>Project</a></li>
                        <li><a href='#contactheader'>Contact</a></li>
                    </ul>
                </div>
                <div id='background-effect1'></div>
            </section>
        </>
    )
}
export default HeadBar;