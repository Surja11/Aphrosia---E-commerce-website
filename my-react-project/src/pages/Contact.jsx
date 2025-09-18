import React, { useState } from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 py-12 px-4 ">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
        <h1 className="text-4xl font-bold text-pink-400 mb-6 text-center">Contact Us</h1>
        <p className="text-blue-400 text-lg text-center mb-8">
          Have questions or suggestions? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-blue-800 font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white font-semibold py-3 rounded-lg hover:bg-pink-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>


    </div>
    <Footer/>
    </>
  );
};

export default Contact;
