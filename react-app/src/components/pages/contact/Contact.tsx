import './Contact.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


function Contact(){

    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_9nmmdnc','template_eyvj62w', form.current, 'H_I-jy1TQTf02zNm1').then(()=>{
            alert('Message Sent!')
            window.location.reload(false)
        }, ()=>{alert('Message send failure. Try again.')})
    }

    return(
        <>
        <div className="contact-form">
          <h2>Let's get in touch!</h2>
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
                    rows={10}
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className=" btn " value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </>
    )
}

export default Contact