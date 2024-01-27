import Image from "next/image";
import "./NewsCard.css";
function NewsCard() {
  return (
    <div className="news_card">
      <div className="news_image">
        <Image
          src="/news/news1.png"
          alt="product"
          objectFit="cover"
          loading="lazy"
          width={250}
          height={400}
          style={{ width: "100%" }}
        />
      </div>
      <div className="news_content_wrapper">
        <div className="news_content">
          <h1>
            Future Projections for Healthcare Professionals and Institutions
          </h1>
          <h3>
            We are now looking to expand our reach at various locations we are
            now looking to expand our reach at various locations
          </h3>
          <div className="date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 16.5C4.85775 16.5 1.5 13.1423 1.5 9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9C16.5 13.1423 13.1423 16.5 9 16.5ZM15 9C15 7.4087 14.3679 5.88258 13.2426 4.75736C12.1174 3.63214 10.5913 3 9 3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.5913 3.63214 12.1174 4.75736 13.2426C5.88258 14.3679 7.4087 15 9 15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9C12.75 9.19891 12.671 9.38968 12.5303 9.53033C12.3897 9.67098 12.1989 9.75 12 9.75H9.75C8.925 9.75 8.25 9.075 8.25 8.25V5.25C8.25 5.05109 8.32902 4.86032 8.46967 4.71967C8.61032 4.57902 8.80109 4.5 9 4.5C9.19891 4.5 9.38968 4.57902 9.53033 4.71967C9.67098 4.86032 9.75 5.05109 9.75 5.25V8.25H12Z"
                fill="#00A6D5"
              />
            </svg>
            <p> 21 January, 2024</p>
          </div>
          {/* <div>
            <div className="read_more">
              <p>
                Read More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M9.5 1L14.5 6L9.5 11"
                    stroke="#151515"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default NewsCard;
