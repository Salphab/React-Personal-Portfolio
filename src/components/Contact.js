import './Contact.css';
import Axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
function Contact(){
    const navigate = useNavigate();
    const [data,Setdata] = useState({
        email:'',
        subject:'',
        message:''
    })
    const newDataUpdate = (e)=>{
        e.preventDefault();
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        Setdata(newData);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:5000/api/message',
        {
                email:data.email,
                subject:data.subject,
                message:data.message,
            })
        .then((res)=>{
            if(res.status === 200){
                console.log('message sent successfully');
                window.location.reload();
            }
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    return(
        <>
            <section className='contactcontainer'>
            <div id='contactheader'>
                <h1>Contact Me</h1>
                <p>You can reach out to me here, I will be at your service</p>
            </div>
                <div id='contact'>
                    <div id='contactmain'>
                        <div id='contactform'>
                            <form onSubmit={handleSubmit}>
                                <input type='text' name='clientName' id='clientname' onChange={newDataUpdate} placeholder='Client Name'/>
                                <input type='text'name='subject' id='subject' onChange={newDataUpdate} value={data.subject} placeholder='Subject'/>
                                <input type='email' name='email' id='email' value={data.email} onChange={newDataUpdate} placeholder='Email Address'/>
                                <textarea name='message' id='message' onChange={newDataUpdate} value={data.message} placeholder='Message' />
                                <input type='submit' id='submit' value='Submit Response'/>
                            </form>
                        </div>
                        <div id='contactmedia'>
                            <div className='media'>
                                <i class='bx bxs-home'></i>
                                <span>No 21 Somoye Osundairo Ave, Lagos NG </span>
                            </div>
                            <div className='media'>
                               <a href='https://wa.me/+2348032645980'>
                                <i class='bx bxl-whatsapp' ></i>
                                </a>
                                <a href='https://t.me/salphab' id='medialink-2'>
                                    <span> Click to chat me up on Whatsapp</span>
                                </a>
                            </div>
                            <div className='media'>
                                <a href='https://t.me/salphab'>
                                    <i class='bx bxl-telegram'></i>
                                </a>
                                <a href='https://t.me/salphab' id='medialink-2'>
                                    <span> Reach me within a click on telegram</span>
                                </a>
                                
                            </div>
                        </div>                        
                    </div>
                    <div id='contactaesthetics'>

                    </div>
                </div>
                <div className='copy-footer'>
                    <p>Website Created by Badmus Ibrahim</p>
                </div>
            </section>
        </>
    )
}
export default Contact;
