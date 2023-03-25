import React from 'react';
import { useFormik } from 'formik';
import { useRef } from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import emailjs from '@emailjs/browser'
const SignupForm = () => {
  const form = useRef()
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyajk6l', 'template_etx4nrp', form.current, 'HptuFsvLL8zmT02lW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  };


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      sendEmail()
      
    },
  });
  return (
    <>
   <div className='p-10' >

    <h1 className='p-5 text-2xl font-Jost'>Contact ME!</h1>
   <form id="form" class="topBefore" onSubmit={sendEmail} ref={form}>


		
    <input id="name" type="text" placeholder="NAME" />
    <input id="email" type="text" placeholder="E-MAIL" />
    <textarea id="message" type="text" placeholder="MESSAGE"  />
    <input id="submit" type="submit" value="GO!"/>

  </form>
    </div>
    <div className='absolute text-center w-full p-1 font-Jost flex flex-col items-center'>
      <h1 className='p-3'>Jatin Kumar</h1>
      <p>@Jatin9071</p>
      <div className='flex gap-10 text-4xl p-5'>
        <AiFillLinkedin className='font-bold cursor-pointer'/>
        <AiFillTwitterCircle className='font-bold cursor-pointer'/>
        <AiFillYoutube className='font-bold cursor-pointer'/>
      </div>
    </div>
    </>
  );
};
export default SignupForm;