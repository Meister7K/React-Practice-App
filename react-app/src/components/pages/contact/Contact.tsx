import './Contact.scss'
import emailjs from '@emailjs/browser'
import { useEffect, useState, useRef } from 'react'

function Contact(){

    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendform('gmail','template_yeJhzkgb', form.current, 'your-token').then(()=>{
            alert('Message Sent!')
            window.location.reload(false)
        }, ()=>{alert('Message send failure. Try again.')})
    }

    return(
        <>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className=" btn " value="Send" />
                </li>
              </ul>
            </form>
          </div>
          <div className='links'>
            <a>add social links here</a>
          </div>
       
        </>
    )
}

export default Contact