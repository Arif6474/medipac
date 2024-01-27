import Image from "next/image";

import "./OurSolutions.css";
import SolutionCard from "./SolutionCard/SolutionCard";
import SolutionCardTwo from "./SolutionCard/SolutionCardTwo/SolutionCardTwo";
import SolutionCardThree from "./SolutionCardThree/SolutionCardThree";

function OurSolutions() {
  return (
    <div className="our_solutions">
      <div className="container">
        <div className="solution_wrapper">
          <div className="solution_image">
            <Image
              src="/solutions/image.png"
              alt="product"
              objectFit="cover"
              loading="lazy"
              className="large"
              width={250}
              height={400}
              style={{ width: "100%" }}
            />
            <Image
              src="/solutions/imagemobile.png"
              alt="product"
              objectFit="cover"
              className="small"
              loading="lazy"
              width={250}
              height={400}
              style={{ width: "100%" }}
            />
          </div>
          <SolutionCard/>
          <div className="solution_image show">
            <Image
              src="/solutions/solution1.png"
              alt="product"
              objectFit="cover"
              loading="lazy"
              width={250}
              height={400}
              style={{ width: "100%" }}
            />
          </div>
          <div className={`solution_image show`}>
            <Image
              src="/solutions/solution2.png"
              alt="product"
              objectFit="cover"
              loading="lazy"
              width={250}
              height={400}
              style={{ width: "100%" }}
            />
          </div>
          <SolutionCardTwo/>
          <div className="solution_image show">
            <Image
              src="/solutions/solution3.png"
              alt="product"
              objectFit="cover"
              loading="lazy"
              width={250}
              height={400}
              style={{ width: "100%" }}
            />
          </div>
          <SolutionCardThree/>
     
        </div>
      </div>
    </div>
  );
}
export default OurSolutions;
