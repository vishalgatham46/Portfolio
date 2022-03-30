import React from 'react'
import "./style.css";
import { GrMail } from "react-icons/gr";
import { HiPhoneOutgoing } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className='ContactContainer'>
            <h1 className="under" id="contact">Contact Me</h1>

    <div className="lastcontainer">
            <div className="address">
                <h2>Let's connect</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae facilis nobis commodi ea autem eveniet recusandae sed similique mollitia officiis!</p>
                <p className="ContactIcons"><GrMail/>&nbsp;&nbsp;&nbsp; vishalgatham46@gmail.com</p>
                <p className="ContactIcons"><HiPhoneOutgoing/>&nbsp;&nbsp;&nbsp; +91&nbsp;8465036502</p>
                <p className="ContactIcons"><ImLocation2/>&nbsp;&nbsp;&nbsp; Hyderabad, Telangana</p>
            </div>
            <div className="form">
              <form>
                <h2>Send a Message</h2>
                <label htmlFor="name">First & Last Name * </label> <br/>
                <input type="text" name="name" id="nameBox" className="area"/><br/><br/>
                <label htmlFor="number">Phone Number *</label> <br/>
                <input type="number" name="number" id="number" className="area"/><br/><br/>
                <label htmlFor='mailId'></label>Email address *<br/>
                <input type="text" name="mail" id="mailId" className="area"/><br/><br/>
                <label htmlFor='messageBox'> Message *</label><br/>
                <textarea name="" id="messageBox" cols="40" rows="3" placeholder="Type your message here..."></textarea><br/><br/>
                <button className="sendbtn" type="button">Send Message</button>
                </form>
            </div>
    </div>
    </div>
  )
}

export default Contact