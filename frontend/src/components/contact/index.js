import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log(form)

    try {

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      alert(data.message);

      setForm({
        email: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed to send message");
    }
  };
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email..." value={form.email} onChange={handleChange} required/>
        <textarea rows="6" name="message" placeholder="Write your message..." value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
