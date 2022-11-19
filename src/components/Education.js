import './Education.css'

function Education(){
    return(
        <>
            <section id='educationcontainer'>
                <h1>My Education and Work Experience</h1>
                <div id='educationbody'>
                    <div id='education'>
                        <i class='bx bx-edit-alt'></i><span id='educationspan'>Education</span>
                        <div id='infocontainer'>
                            <p id='educationyear'>
                            2014-2019
                            </p>
                            <p id='degreetext'>
                                &#9830;  Bachelor's Degree
                            </p>
                            <p id='university'>University : Bayero University Kano</p>
                            <p id='university'>Major : Agricultural Economics</p>
                            <p id='university'>
                                Summary: Obtained in year 2019 from a Nigeria owned University,
                                         i major in Agricultural Economics and i graduated with second 
                                         class degree of B.Agriculture(Agricultural Economics)
                            </p>
                        </div>
                    </div>
                    <div id='experience'>
                    <i class='bx bxs-shopping-bag'></i><span id='educationspan'>Experience</span>
                        <div id='infocontainer'>
                            <p id='experienceyear'>
                            2019-2021
                            </p>
                            <p id='degreetext'>
                            &#9830; Technoworld System Plus
                            </p>
                            <p id='university'>Web Developer intern</p>
                            <p id='experienceyear'>
                            2019-2021
                            </p>
                            <p id='degreetext'>
                            &#9830; Freelancing at Upwork and Fiverr
                            </p>
                            <p id='university'>Mern Stack Developer</p>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}
export default Education;