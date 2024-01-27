import Image from "next/image";
import './AboutUs.css'
function AboutUs() {
  return (
    <div className="about_us">
      <div className="container">
        <div className="about_us_wrapper">
          <div className="about_us_left_content">
            <div>
              <Image
                src="/aboutUs/about1.png"
                alt="product"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <Image
                src="/aboutUs/about2.png"
                alt="product"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="about_us_right_content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="52"
              viewBox="0 0 51 52"
              fill="none"
            >
              <path
                d="M38.7228 19.5736L35.2607 12.0964L34.7079 10.9127L34.3879 12.2119C31.7404 22.6627 29.093 33.1135 26.7074 43.622C25.8055 37.4151 24.9036 31.2081 23.9435 25.03C22.8089 17.5239 21.7034 9.9889 20.3651 2.48279L20.0451 0L19.3177 2.39618L14.5465 17.3218L0 17.6682L14.9247 18.0147H15.1865V17.7548L19.6087 5.1388C20.5106 11.8366 21.4997 18.5343 22.518 25.3475C23.5944 32.8825 24.6708 40.3886 25.8346 47.9236L26.3582 51.9654L27.2892 48.0391C29.927 36.549 32.4678 25.0877 34.9116 13.6553L38.1409 19.9778V20.151H38.3155L51 19.8623L38.7228 19.5736Z"
                fill="#016885"
              />
            </svg>
            <h1>About US</h1>
            <h3>Explore our journey as we work towards a healthier tomorrow</h3>
            <p>
              Your trusted partner in delivering high-quality medical equipment
              solutions. With a commitment to excellence, we strive to enhance
              healthcare providing reliable products. <br /> We draw strength from our
              purpose, which is above all to help and to heal. Our physicians,
              nurses and other caregivers & supporting staff are passionate.
            </p>
            <div className="about_us_btn">
              <button className="btn"><span>LEARN MORE</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
