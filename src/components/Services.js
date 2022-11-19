import './Services.css';

function Services(){
    return(
        <>
            <section id='services'>
                <h1>My Services</h1>
                <p id='servicetext'>
                    I render top notch services to my clients,
                    some of the services i render includes the following
                </p>
                <div id='megacontainer'>
                    <div className='servicesblock'>
                        <i class='bx bx-devices'></i>
                        <h2 id='blockheader1'>Responsive Web Pages</h2>
                        <div className='blockbody'>
                            <p>
                                i create a fascinating responsive web page
                                that are scalable across all desktop screen 
                                and mobile devices. My work uses technologies 
                                and frameworksvthat includes Html for structuring
                                things with some touch of Css or Bootstrap for 
                                presentation and orientation. with incoporation of
                                javaScript of DOM manipulate and with the use of ReactJs 
                                framework i create a realiable fast and efficient web pageswith ease

                                
                            </p>
                        </div>
                    </div>
                    <div className='servicesblock'>
                        <i class='bx bxs-server'></i>
                        <h2 id='blockheader2'>Web Application</h2>
                        <div className='blockbody'>
                            <p>
                                Web Application as an intergral part of few 
                                individual web pages and most enterprise web pages
                                i create backend application with the use of Nodejs/ExpressJs
                                and Java. My backend web application put into consideration best
                                performing algorithms and make security a major concern.


                            </p>
                        </div>
                    </div>
                    <div className='servicesblock'>
                        <i class='bx bxl-mongodb'></i>
                        <h2 id='blockheader3'>Database</h2>
                        <div className='blockbody'>
                            <p>
                                Database Storage and Database management for
                                Users data storage management. Most of my work
                                stores data and retrieve data from the database in 
                                BSON format on MongoDb by establishing a secure connection 
                                between web application and database. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services;