import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';

export const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      
      <TextField required id="standard-basic" label="First name" variant="standard" name="FirstName"/>
      <TextField id="standard-basic" label="Last name (optional)" variant="standard" name="LastName"/>
      <TextField required id="standard-basic" label="Email" variant="standard" name="Email"/>
      <TextField id="standard-basic" label="Website URL (optional)" variant="standard" name="Website"/>
      <TextField id="standard-basic" label="Your Message (optional)" variant="standard" name="message"/>
      <input className='Submit' type="submit" value="Submit" />
    </form>
  );
};
