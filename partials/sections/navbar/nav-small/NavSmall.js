"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./NavSmall.css";

function NavSmall({ showSmallNav, smallNavToggle }) {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className={`nav_small ${showSmallNav && "show"}`}>
      <div className="nav_smal_overlay" onClick={smallNavToggle}></div>
      <div className="nav_small_content">
        <button type="button" className="btn_close" onClick={smallNavToggle}>
          <Image src="/close.svg" alt="brand" width={20} height={20} />
        </button>
        <div className="logo_wrapper">
          <Link href="/" onClick={smallNavToggle}>
            <Image
              src="/logo.svg"
              alt="brand"
              width={216}
              height={52}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </div>

        <nav>
          <Link
            href="#home"
            className={`${activeNav === "home" ? "active" : ""}`}
            onClick={() => {
              smallNavToggle();
              setActiveNav("home");
            }}
          >
            About us
          </Link>
          <Link
            href="#services"
            className={`${activeNav === "service" ? "active" : ""}`}
            onClick={() => {
              smallNavToggle();
              setActiveNav("service");
            }}
          >
            Products & Services
          </Link>
          <Link
            href="#testimonials"
            className={`${activeNav === "testimonial" ? "active" : ""}`}
            onClick={() => {
              smallNavToggle();
              setActiveNav("testimonial");
            }}
          >
            Solutions
          </Link>
          <Link
            href="#contactUs"
            className={`${activeNav === "contact" ? "active" : ""}`}
            onClick={() => {
              smallNavToggle();
              setActiveNav("contact");
            }}
          >
            Resources
          </Link>
          <Link
            href="#contactUs"
            className={`${activeNav === "contact" ? "active" : ""}`}
            onClick={() => {
              smallNavToggle();
              setActiveNav("contact");
            }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default NavSmall;
