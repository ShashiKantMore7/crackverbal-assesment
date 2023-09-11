import React from "react";
import ReactPlayer from "react-player";
import Zoom from "react-reveal/Zoom";
import "./video.css";

const Video = () => {
  const data = [
    {
      id: 1,
      url: "https://youtu.be/f8C9LD66BSo?si=d8by9vEIxp6v9MmT",
      title: "Work process of our team",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium."
    },
    {
      id: 2,
      url: "https://youtu.be/f8C9LD66BSo?si=d8by9vEIxp6v9MmT",
      title: "Work process of our team",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium."
    },
    {
      id: 3,
      url: "https://youtu.be/f8C9LD66BSo?si=d8by9vEIxp6v9MmT",
      title: "Work process of our team",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium."
    },
    {
      id: 4,
      url: "https://youtu.be/f8C9LD66BSo?si=d8by9vEIxp6v9MmT",
      title: "Work process of our team",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium."
    },
    {
      id: 5,
      url: "https://youtu.be/f8C9LD66BSo?si=d8by9vEIxp6v9MmT",
      title: "Work process of our team",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium."
    },
    {
      id: 6,
      url: "https://youtu.be/f8C9LD66BSo?si=d8by9vEIxp6v9MmT",
      title: "Work process of our team",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, praesentium."
    }
  ];
  return (
    <div className="container video" id="video">
      <div className="section_title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Zoom>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="video-details" key={index}>
                <ReactPlayer
                  url={item.url}
                  controls
                  playing={false}
                  width="auto"
                  height="250"
                />
                <div className="video-content">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Video;
