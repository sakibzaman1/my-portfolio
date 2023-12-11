import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    swal({
        title: "Thanks!",
        text: "Will Reach out to you. Soon!!",
        imageUrl: "images/thumbs-up.jpg"
      });

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="contact" className="lg:flex  justify-center">

        <div className="lg:w-1/2">
            <h1 className="text-7xl lg:mb-10 mb-10" data-aos="fade-right" data-aos-delay="100"  data-aos-duration="2000">Contact Me</h1>
            <div className="flex items-center gap-4 lg:gap-16 mt-6 justify-center mx-auto my-10 lg:my-0">
                <Link><LinkedInIcon/></Link>
                <Link><FacebookIcon/></Link>
                <Link><WhatsAppIcon/></Link>
                <Link><GitHubIcon/></Link>
                <Link><EmailIcon/></Link>
            </div>
        </div>

<form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="lg:w-1/2 px-10"
      data-aos="zoom-in" data-aos-delay="100"  data-aos-duration="2000"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>

    </div>
  );
};

export default ContactForm;