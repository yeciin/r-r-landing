import React, { useState } from "react";
import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formEntries = Array.from(formData.entries());
    const formObject = Object.fromEntries(formEntries);
    const formDataString = JSON.stringify(formObject);

    try {
      await fetch(contact_form_action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formDataString,
      });

      event.target.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
              target="dummyframe"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                  name="message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
            {isSubmitted && (
              <p className="mt-4 text-green-600 font-semibold">
                Your information has been submitted. Thank you!
              </p>
            )}
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <iframe name="dummyframe" id="dummyframe" className="hidden"></iframe>
    </section>
  );
};

export default Contact;
