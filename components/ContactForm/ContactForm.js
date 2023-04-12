import React, { useEffect, useRef, useState } from 'react';
import Notification from '../../ui//notification';
import styles from './contact-form.module.css';


async function sendContactData(availdata) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(availdata),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(availdata.message || "Error")
    }
}


function ContactForm(props) {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [reqStatus, setRequestStatus] = useState();

    useEffect(()=>{
        if(reqStatus==='success' || reqStatus==='error'){
          const timer =   setTimeout(()=>{setRequestStatus(null)},3000)
          return ()=>clearTimeout(timer);
        }
    },[reqStatus])

    async function handleSubmit(e) {
        e.preventDefault();

        setRequestStatus('pending');
        try {
            await sendContactData({
                email: emailRef.current.value,
                name: nameRef.current.value,
                message: messageRef.current.value
            });
            setRequestStatus('success');
        }
        catch (e) {
            setRequestStatus('error');
        }
    }

    let notification;

    if(reqStatus==='pending'){
        notification ={
            status: 'pending',
            title: "Sending",
            message: "on way"
        }
    }

    if(reqStatus==='success'){
        notification ={
            status: 'success',
            title: "success",
            message: "Done"
        }
    }


    if(reqStatus==='error'){
        notification ={
            status: 'error',
            title: "Fail",
            message: "Some error"
        }
    }

 
    return (
        <section className={styles.contact}>
            <h1>HELP</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input ref={emailRef} id='email' type='email' required></input>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Data</label>
                        <input ref={nameRef} id='name' type='text' required></input>
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Message</label>
                    <textarea ref={messageRef} id='message' type='text' rows='5'></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Send</button>
                </div>
            </form>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}

        </section>
    );
}

export default ContactForm;