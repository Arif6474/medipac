import Image from "next/image";
import "./ProductCard.css";

function ProductCard({}) {
  return (
    <div className="product_card">
      <div className="product_image">
        <Image
          src="/products/product.png"
          alt="product"
          objectFit="cover"
          loading="lazy"
          width={250}
          height={400}
          style={{ width: "100%" }}
        />
      </div>
      <div className="product_desc">
        <h1>X-Ray Machine</h1>
        <p>
          We are now looking to expand our reach at various locations we are now
          looking to expand our reach at various locations
        </p>
        <div className="product_btn">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0444 4.65509C14.3497 4.35027 14.8444 4.3507 15.1492 4.65607L22.4278 11.9477C22.7323 12.2527 22.7323 12.7467 22.4278 13.0517L15.1492 20.3433C14.8444 20.6486 14.3497 20.649 14.0444 20.3443C13.739 20.0395 13.7385 19.5448 14.0433 19.2394L19.9901 13.2821L3.12555 13.2939C2.69407 13.2943 2.34405 12.9447 2.34375 12.5132C2.34345 12.0818 2.69298 11.7318 3.12445 11.7314L19.9924 11.7196L14.0433 5.75994C13.7385 5.45457 13.739 4.95991 14.0444 4.65509Z"
                fill="#4E4E4E"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
