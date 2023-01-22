import * as React from 'react'
import Layout from '../components/layout'

const contactPage = () => {
    return (
        <Layout>
            <form method="post" action="https://getform.io/f/df5e366d-e6fd-4f72-8776-f690e49db306">
            <label>
                Name
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Subject
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
            </form>
        </Layout>
    )
}

export default contactPage