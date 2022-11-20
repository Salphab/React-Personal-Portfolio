import './Aboutme.css';
import {Link} from 'react-router-dom';
import React from 'react';
 function Aboutme(){
    return(
        <>
            <section id='aboutme'>
               <div id='img'>
                    <img src={require('../img/DSC_0046.png')} alt='Badmus Ibrahim'/>
               </div>
               <div id='me'>
                <p id='mehead'>About Me</p>
                <p id='headingme'>I am Professional Web Developer Having Over 2-Years of Experience</p>
                <p id='bodyme'>
                I am a web developer. I most of my time, practically every day, experimenting with HTML,
                 CSS, and JavaScript; dabbling with ReactJs Nodejs/expressJs, Java and MongoDb; and exploring a wide variety of potentially useful information
                about evolving technologies on the internet. I build websites that delight and inform. I do it well.I am curious, and I enjoy work
                that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in 
                the state of the art so that I can meet challenges with tools well suited to the job at hand. i keep track of my every piece of code on github for  version control and work efficiency
                </p>
                <div id='demo'>
                    <div>
                        <section className='democol1'>
                            <i class='bx bxs-envelope'></i>
                            <h1>Email:</h1>
                            <p>Ibrahimbadmus0295@gmail.com</p>
                        </section>
                        <section className='democol2'>
                            <i class='bx bx-calendar'></i>
                            <h1>Date of Birth:</h1>
                            <p>17th February 1995</p>
                        </section>
                    </div>
                    <div>
                      <section className='democol1'>
                            <i class='bx bx-current-location'></i>
                            <h1>Location:</h1>
                            <p>Nigeria NG</p>
                        </section>
                        <section className='democol2'>
                            <i class='bx bxs-phone-call'></i>
                            <h1>contact Line:</h1>
                            <p>+2348032645980</p>
                        </section>
                    </div>
                </div>
                <a href={require('../assets/Badmus_Ibrahim Abdulfatah_Resume_20-11-2022-20-58-04.pdf')} download='Resume' id='resume'>Download Resume</a>
               </div>
            </section>
        </>
    )
 }
 export default Aboutme;