import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaQuestionCircle, FaComment, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validEmail, setValidEmail] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidEmail(value === '' ? null : emailRegex.test(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const SERVICE_ID = "service_cf5nsse";
    const TEMPLATE_ID = "template_fb2q9bu";
    const PUBLIC_KEY = "DHXQsFr8AAUzGIJyl";
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields!");
      setIsSubmitting(false);
      return;
    }
    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, PUBLIC_KEY)

      toast.success("Message send successfully")
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">

      <header className="container mx-auto py-8 px-4 text-center flex flex-col items-center justify-center">
        <div className="flex items-center mb-2">
          <img
            src="codeLogo.png"
            className="mr-3 h-7"
            alt="Logo"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">
          Get in Touch <span className="text-purple-700">{`<Contact/>`}</span>
        </h1>
        <p className="text-lg text-gray-600">
          Have questions? Our team is ready to help you code better.
        </p>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="flex items-center mb-2 font-medium">
                  <FaUser className="mr-2 text-blue-500" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-2 font-medium">
                  <FaEnvelope className="mr-2 text-blue-500" />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border ${validEmail === true ? 'border-green-500' :
                      validEmail === false ? 'border-red-500' : 'border-gray-300'
                      } rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition`}
                    required
                  />
                  {validEmail !== null && (
                    <span className="absolute right-3 top-3">
                      {validEmail ?
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg> :
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      }
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="flex items-center mb-2 font-medium">
                  <FaQuestionCircle className="mr-2 text-blue-500" />
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition bg-white"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="flex items-center mb-2 font-medium">
                  <FaComment className="mr-2 text-blue-500" />
                  Message
                </label>
                <div className="border border-gray-300 rounded overflow-hidden">
                  <div className="flex">
                    <div className="bg-gray-100 p-2 text-xs text-gray-500 border-r border-gray-300 text-right">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="py-1">{i + 1}</div>
                      ))}
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full p-2 focus:outline-none resize-none font-mono"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium rounded transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-pulse mr-2">{`{`}</span>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="animate-pulse ml-2">{`}`}</span>
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Support Email:</h3>
              <p className="text-blue-600 font-medium">ashusuryavansi143@gmail.com</p>
              <p className="text-sm text-gray-500">Typical response: &lt;24 hours</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">🚀 Developer Resources:</h3>
              <ul className="list-disc pl-5 text-blue-600 font-medium">
                <li>
                  <a href="https://code.visualstudio.com/docs"
                    target="_blank" rel="noopener noreferrer" className="hover:underline">
                    How to Use a Code Editor
                  </a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Learn"
                    target="_blank" rel="noopener noreferrer" className="hover:underline">
                    How to Learn a Programming Language
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/codewithshahan/how-to-write-clean-code-3599"
                    target="_blank" rel="noopener noreferrer" className="hover:underline">
                    How to Write Clean Code
                  </a>
                </li>
                <li>
                  <a href="https://openai.com/research"
                    target="_blank" rel="noopener noreferrer" className="hover:underline">
                    AI in Coding: How It's Beneficial in 2025
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Social Media:</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <FaDiscord className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Emergency Contact:</h3>
              <p className="text-gray-700">Critical Issues? Call</p>
              <p className="text-blue-600 font-medium">(+91) 7017234034</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">📍 Location:</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "8px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7060.418054641346!2d78.03260688825553!3d27.195295361920337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747725cfbac741%3A0x6f3f7f12bbd636b6!2sTrans%20Yamuna%20Colony%2C%20Rambagh%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712412345678"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Built for Developers, by Developers.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Safe & Reliable
            </div>
            <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              24/7 Support
            </div>
            <div className="bg-white px-4 py-2 rounded shadow-sm flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              Open Source
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;