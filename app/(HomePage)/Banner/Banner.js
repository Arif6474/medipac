import React from "react";
// import bannerVideo from '../../../Assets/banner/banner.mp4'
// import banner from '../../../Assets/Banner/banner-image-monile.png'
import "./Banner.css";
import Image from "next/image";

function Banner() {
  return (
    <>
      <section className="banner-section">
        <div id="video-container" className="home-banner">
        <div className="overlay"></div>
          <video autoPlay muted loop className="banner-video">
            <source src="./banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div id="image-container" className="banner-image">
          <Image
            src="/banner-image-monile.png"
            alt="Banner"
            objectFit="cover"
            loading="lazy"
            width={250}
            height={400}
            style={{ width: "100%"}}
          />
        </div>

        <div id="content">
          <p className="welcome">Welcome to Medipac</p>
          <div class="horizontal-line"></div>
          <h1>Transforming Healthcare together</h1>
          <p className="banner-pra">Your trusted partner in delivering high-quality medical equipment solutions. With a commitment to 
            excellence, we strive to enhance healthcare by providing reliable products.</p>
            <div className="banner_btn">
              <button className="btn">
              <span>LET&apos;S BEGIN</span>
              </button>
            </div>
        </div>
      </section>

      {/* <div id="content-mobile">
        <p>Welcome to Medipac</p>
        <h1>Transforming Healthcare together</h1>
      </div> */}
    </>
  );
}

export default Banner;
