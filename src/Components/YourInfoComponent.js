import React, { useState } from "react";

import "../styles/YourInfo.css";

function YourInfoComponent(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (formData.name && formData.email && formData.phone) {
      // Submit the form
      // ...
      props.handleSelectPLanClick();
      // Call the function from another component
    }
  };

  return (
    <section className="your-info">
      <article>
        <div className="description">
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g Stephen King"
              required
            />
            {submitted && !formData.name && (
              <div className="invalid-feedback">Name is required</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {submitted && !formData.email && (
              <div className="invalid-feedback">Email is required</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="e.g. + 1 234 567 890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {submitted && !formData.phone && (
              <div className="invalid-feedback">Phone number is required</div>
            )}
          </div>
          <button type="submit">Next Step</button>
        </form>
      </article>
    </section>
  );
}

export default YourInfoComponent;
