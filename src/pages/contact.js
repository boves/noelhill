import * as React from 'react'
import Layout from '../components/layout'
import { Script } from 'gatsby'
import { navigate } from 'gatsby-link'
import {
    name,
    email,
    subject,
    message,
    formGroup
    
} from '../components/layout.module.css'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

// const contactPage = () => {
export default function Contact(){
    const [state, setState] = React.useState({})

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
    return (
        <Layout>
            <form 
                name="contact"
                method="post" 
                action="/thanks/"
                data-netlify="true" 
                netlify-honeypot="bot-field" 
                onSubmit={handleSubmit}
            > 
                 {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don't fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>

                <div className={formGroup}>
                    <label>
                        Name
                    </label>
                        <input type="text" name="name" id="name" className={name} onChange={handleChange} />
                </div>
                <div className={formGroup}>
                    <label>
                        Email
                    </label>
                    <input type="email" name="email" id="email" className={email} onChange={handleChange}/>
                </div>
                <div className={formGroup}>
                    <label>
                        Subject
                    </label>
                    <input type="text" name="subject" id="subject" className={subject}  onChange={handleChange}/>
                </div>
                <div className={formGroup}>
                    <p>Contact reason</p>
                    <select name="reason">
                        <option value="">Please choose one</option>
                        <option value="midwest">Midwest</option>
                        <option value="west-coast">West Coast</option>
                    </select>
                </div>
                <div className={formGroup}>
                    <label>
                        Message
                    </label>
                    <br />
                    <textarea name="message" id="message" rows="5" className={message} onChange={handleChange}/>
                </div>
                <input type="reset" value="Clear" className='clear'/>
                <button type="submit">Send</button>
                <br />
                <br />
                <br />
                <div class="g-recaptcha" data-sitekey="6LcHqxskAAAAAGjdcMxcq58Xa1Yqbg1JdmGmuFxr" />
            </form>
        </Layout>
    )
}

export function Head(){
    return (
        <>
         <Script src= "https://www.google.com/recaptcha/api.js" />
        </>
    )
}

// export default contactPage
