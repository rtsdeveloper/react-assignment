import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data);
  };
  const handleSubmit = (e) => {
    axios.post("https://64569cdf5f9a4f236148714b.mockapi.io/user/"
      , {
        'name': data.name,
        'email': data.email,
        'phone': data.phone,
        'message': data.message,
      })
      .then(function (response) {
        if (!data.name || !data.email || !data.phone || !data.message) {
          alert("Please add Data");
        }
        else {
          alert("Congratulation! Your Data has been added sucessfully");
          console.log(response);
        }
      })
    setData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-10 mt-5">
          <h2>Submit Your Form Here</h2>
          <form >
            <input
              name='name'
              value={data.name}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Your Name" />

            <input
              name='email'
              value={data.email}
              onChange={handleChange}
              type="email"
              className="form-control mb-2"
              placeholder="Your Email" />

            <input
              name='phone'
              value={data.phone}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Your Number" />

            <textarea
              name='message'
              value={data.message}
              onChange={handleChange}
              rows="5"
              className="form-control mb-2"
              placeholder="Your Message" />

            <input
              name="send" onClick={handleSubmit}
              type="button"
              className="form-control mb-2"
              value="SEND ME" />

          </form>
        </div>
      </div>
    </div>
  )
}

export default Form

