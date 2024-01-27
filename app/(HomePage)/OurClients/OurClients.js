import Image from "next/image";
import "./OurClients.css"
function OurClients() {
  return (
    <div className="clients">
      <div className="container">
        <div className="clients_wrapper">
          <div className="client_left_content">
            <p>
              We are proud to <br/> partner with diverse range of healthcare
              organizations and institutions
            </p>
          </div>
          <div className="client_right_content">
            <div className="client_image">
              <Image
                src="/clients/client1.png"
                alt="clients"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
            <div className="client_image">
              <Image
                src="/clients/client2.png"
                alt="clients"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
            <div className="client_image">
              <Image
                src="/clients/client3.png"
                alt="clients"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
            <div className="client_image">
              <Image
                src="/clients/client4.png"
                alt="clients"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
            <div className="client_image">
              <Image
                src="/clients/client5.png"
                alt="clients"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
            <div className="client_image">
              <Image
                src="/clients/client6.png"
                alt="clients"
                objectFit="cover"
                loading="lazy"
                width={250}
                height={400}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurClients;
