import './Skills.css';

function Skills(){
    return(
        <>
            <section id='skills'>
                <h1>My Skills</h1>
                <p id='skillstext'>
                    Below are group of skill sets that I acquired.
                </p>
                <div id='skillbody'>
                    <div className='skillcontent'>
                        <p>NodeJs/ExpressJs</p>
                        <div className='ratingcontainer'>
                            <div id='nodevalue'></div>
                        </div>
                        <p>ReactJs</p>
                        <div className='ratingcontainer'>
                            <div id='reactvalue'></div>
                        </div>
                        <p>JavaScript</p>
                        <div className='ratingcontainer'>
                            <div id='javascriptvalue'></div>
                        </div>
                    </div>
                    <div className='skillcontent'>
                        <p>HTML5</p>
                        <div className='ratingcontainer'>
                            <div id='htmlvalue'></div>
                        </div>
                        <p>Tailwind Css</p>
                        <div className='ratingcontainer'>
                            <div id='webvalue'></div>
                        </div>
                        <p>MongoDb</p>
                        <div className='ratingcontainer'>
                            <div id='mongodbvalue'></div>
                        </div>
                    </div>
                    <div className='skillcontent'>
                        <p>Algorithms</p>
                        <div className='ratingcontainer'>
                            <div id='algorithmsvalue'></div>
                        </div>
                        <p>CSS</p>
                        <div className='ratingcontainer'>
                            <div id='cssvalue'></div>
                        </div>
                        <p>Java SE</p>
                        <div className='ratingcontainer'>
                            <div id='javavalue'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;