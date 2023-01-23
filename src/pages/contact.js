import * as React from 'react'
import Layout from '../components/layout'
import { Script } from 'gatsby'
import {
    name,
    email,
    subject,
    message,
    formGroup
    
} from '../components/layout.module.css'

const contactPage = () => {
    return (
        <Layout>
            <form method="post" action="https://getform.io/f/df5e366d-e6fd-4f72-8776-f690e49db306">
                <div className={formGroup}>
                    <label>
                        Name
                    </label>
                        <input type="text" name="name" id="name" className={name} />
                    
                </div>
                <div className={formGroup}>
                    <label>
                        Email
                    </label>
                    <input type="email" name="email" id="email" className={email} />
                    
                </div>
                <div className={formGroup}>
                    <label>
                        Subject
                    </label>
                    <input type="text" name="subject" id="subject" className={subject}  />
                    
                </div>
                <div className={formGroup}>
                    <label>
                        Message
                    </label>
                    <br />
                    <textarea name="message" id="message" rows="5" className={message} />
                </div>
                <input type="reset" value="Clear" />
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

export default contactPage