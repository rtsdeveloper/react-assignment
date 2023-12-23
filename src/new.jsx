import React, { useState } from 'react';

const Form = () => {
  const [data, setData] = useState({name: '',email: '',phone: '',message: ''});

  const handleChange = (e) => {
    setData({...data,[e.target.name]: e.target.value});
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-xs-10 mt-5">
          <h2>Submit Your Form Here</h2>
          <form>
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Your Name"
            />
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              type="email"
              className="form-control mb-2"
              placeholder="Your Email"
            />
            <input
              name="phone"
              value={data.phone}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              placeholder="Your Number"
            />
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              rows="5"
              className="form-control mb-2"
              placeholder="Your Message"
            />
            <input
              name="send"
              type="submit"
              className="form-control mb-2"
              value="SEND ME"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
