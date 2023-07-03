import React, { useRef } from 'react';

import classes from './Contact.module.css';

function Contact(props) {

  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    console.log(nameRef)
    console.log(emailRef)
    console.log(phoneRef)


    const userInfo = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
    };

    const response = fetch('https://restaurant-app-a8065-default-rtdb.firebaseio.com/contact.json',{
      method : 'post',
      body : JSON.stringify(userInfo),
      headers : {
        'Content-Type' : 'application/json'
      }

    })

    
  }



  return (
    <div className='container d-flex justify-content-center' >
    <form onSubmit={submitHandler} className='col-lg-6 col-md-6 col-sm-12'>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='Email'>E-mail</label>
        <input type='email' id='email' ref={emailRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='phone'>Contact Number</label>
        <input type='number' id='phone' ref={phoneRef} />
      </div>
      <button>Submit</button>
      <br />
    </form>
    </div>

    
  );
}

export default Contact;
