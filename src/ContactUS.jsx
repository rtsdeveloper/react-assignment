import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUS = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const form = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone || !data.message) {
      alert('Please add Data');
    } else {

// Custom Js Liberary Can be start Here
      emailjs
      .sendForm('service_6ij7pap', 'template_4zgm6mj', form.current, 'oDz7J9a_TEWdPoTNr')
      .then(
        (result) => {
          //console.log(result.text);
          alert('Congratulations! Your Data has been added successfully');
          },
          (error) => {
          alert("Opps..! Server Break...")
            //console.log(error.text);
          }
        );
// Custom Js Liberary will be end Here

      setData({ name: "", email: "", phone: "", message: "" })
    }
  };

  return (
    <div className="container">
      <div className="col-lg-6 col-md-6 col-xs-10 mt-5">
      <h2>Submit Your Form Here</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          className="form-control mb-2"
          placeholder="Your Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          className="form-control mb-2"
          placeholder="Your Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="text"
          className="form-control mb-2"
          placeholder="Your Number"
          value={data.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          className="form-control mb-2"
          placeholder="Your Message"
          value={data.message}
          onChange={handleChange}
        />
        <input name="send" type="submit" className="form-control mb-2" value="Send" />
      </form>
    </div>
    </div>
  );
};

export default ContactUS;
