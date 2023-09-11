import React, { useState, useEffect } from "react";
// import { FaLowVision } from "react-icons/fa";
import "./career.css";
import DataInfo from "./DataInfo";
import Pagination from "../Pagination/Pagination";
import Fade from "react-reveal/Fade";

const Career = () => {
  // const url = "https://jsonplaceholder.typicode.com/posts";

  // const [data, setData] = useState([]);

  // const PER_PAGE = 5;
  // const [currentPage, setCurrentPage] = useState(1);
  // const handlePageClick = ({ selected: selectedPage }) => {
  //   setCurrentPage(selectedPage);
  // };
  // const offset = currentPage * PER_PAGE;
  // const currentPageData = data.slice(offset, offset + PER_PAGE);
  // const pageCount = Math.ceil(data.length / PER_PAGE);

  // const loadPostData = () => {
  //   fetch(url, {
  //     method: "GET"
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result) {
  //         setData(result);
  //         console.log(result);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   loadPostData();
  // }, []);
  const careerData = [
    {
      name: "1. CONNECT",
      line:
        "Our Coaches will help you create a plan and help you with a highly effective learning path that’s unique to your goals and Target GMAT Score",
      line1:
        "> GMAT Planner + Target Score Sessio" +
        ">Access to Cheatsheets> Weekly Goal Progress & Analytics> Review Session with Facilitator"
    },
    {
      name: "2. CONSUME",
      line:
        "Concepts, Sessions, and More - Depending on the path that's best for you, you begin your learning journey through our “Learn Paths” optimised for scoring and success.",
      line1:
        "Compute™ LIVE - 40+ Hours of GMAT Quant > Compre™ LIVE - 40+ Hours of GMAT Verbal > 80+ Hours of On-Demand Recordings"
    },
    {
      name: "3. CORRECT",
      line:
        "Sectional Tests after each sub-module to test clarity of concepts and your understanding of Quick Hacks",
      line1:
        "> We cover more than 55 sectional tests (1200+ Questions) to ensure you got it right from the start.> Clear video explanation of “How” to solve questions effectively and with incredible accuracy.> Scores to visualize your performance and path corrections to increase your learning efficiency and effectiveness."
    },
    {
      name: "4. CRACK THE GMAT",
      line:
        "The best way to crack the GMAT in one go is to score well in the Mock Tests. They mirror your actual performance in the GMAT. We have 5 Full length tests to get you to the score improvement you need.",
      line1:
        "> 5 Full Length Mock tests that mirror with accuracy your real-world GMAT score."
    }
  ];
  return (
    <div className="container career">
      <div className="section_title">
        <h5>Career</h5>
        <span className="line"></span>
        <h3>Our Students Have Seen Results By Applying Our "Magic Method"</h3>
      </div>
      <p>
        The most effective techniques revealed ever. That too, with a personal
        touch. Carefully designed & battle-tested On-Demand GMAT Mastery
        Program. Best-in-class platform with access to a highly interactive
        community. Access to Coaches & guides to help you address queries.{" "}
      </p>
      <div className="row">
        {careerData.map((item, index) => (
          <Fade left>
            <div
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              key={index}
            >
              {/* <DataInfo key={index} {...item} /> */}
              {/* <span className="career-info">
                  <h6>{item.name}</h6>
                </span> */}
              <DataInfo title={item.name} line={item.line} line1={item.line1} />
            </div>
          </Fade>
        ))}
      </div>
      <Fade bottom>
        {/* <div className="pagination-details">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div> */}
      </Fade>
    </div>
  );
};

export default Career;
