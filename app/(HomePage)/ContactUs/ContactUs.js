"use client";
import React, { useState } from "react";
import "./ContactUs.css";
import Image from "next/image";
import mountains from "../../../public/contact-us.png";
import contactSmall from "../../../public/contact/contactbg.png";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const itemData = {
      name,
      email,
      phone,
      subject,
      message
    };
  }
  return (
    <sectoin className="service py_10" id="contactUs">
      <div className="contact_sec">
        <div className="contact_bg">
      <div className="overlay"></div>
          <Image
            src={mountains}
            className="large_image"
            alt="Banner"
            objectFit="cover"
            loading="lazy"
            style={{ width: "100%" }}
          />
          <Image
            src={contactSmall}
            alt="Banner"
            className="small_image"
            objectFit="cover"
            loading="lazy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="contact-from">
          <div className="">
            <form className="form_wrapper" onSubmit={handleSubmit}>
              <h1>Get a Free Quote</h1>
              <p>
                We value your inquiries and are here to assist you. Choose the
                most convenient way to reach out.
              </p>
              <div className="input_label">
                <label>Name</label>
                <input
                  className="input_item"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input_label">
                <label>Email address</label>
                <input
                  className="input_item"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input_label">
                <label>Message</label>
                <textarea
                  className="input_item"
                  rows="6"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="contact_btn">
                <button type="submit" className=" fill">
                  <span>Get Free Quote</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </sectoin>
  );
}

export default ContactUs;
