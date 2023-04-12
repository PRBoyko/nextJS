import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

function ContactPage(props) {
    return <Fragment>
        <Head>
            <title>Contact</title>
            <meta name="description" content="message"></meta>
        </Head>
        <ContactForm />
    </Fragment>

}

export default ContactPage;