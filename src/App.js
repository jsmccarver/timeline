import "./App.css";
import { useRef } from "react";
const timeline = [
  {
    year: 1986,
    info: {
      line: "Stewart develops proprietary StewartFloat® tin bath producing first quality glass",
    },
    color: "red",
  },
  {
    year: 1991,
    info: {
      line: "Granted US Consent Decree to supply StewartFloat® tin bath furnace technology & equipment globally without restrictions",
    },
    color: "orange",
  },
  {
    year: 1992,
    info: {
      line: "Successfully commissioned 1st 500 MTPD StewartFloat®   tin bath in Indonesia (turn-key)",
    },
    color: "blue",
  },
  {
    year: 1994,
    info: {
      line: "Successfully commissioned 2nd 500 MTPD StewartFloat®  tin bath in France",
    },
    color: "pink",
  },
  {
    year: 1995,
    info: {
      line: "Stewart develops Ultra Thin Glass + auto pool system ",
    },
    color: "purple",
  },
  {
    year: 1997,
    info: {
      line: "4th StewartFloat®  - Indonesia (500 MTPD)\n5th StewartFloat®  - China (500 MTPD from 0.55 to 19mm)Several R&D innovations",
    },
    color: "coral",
  },
  {
    year: 2000,
    info: {
      line: "7th StewartFloat®  - Iran Develops Ultra Thick Glass Develops Borosilicate tin bath",
    },
    color: "grey",
  },
  {
    year: 2002,
    info: {
      line: "8th StewartFloat® - China9th StewartFloat®  - Italy 10th StewartFloat®   - Iran Ultra Clear Glass developed",
    },
    color: "black",
  },
];

function App() {
  const myRefs = useRef([]);
  var index = 0;
  function handleClick(i) {
    if (i <= 1) {
      i = 1;
    }
    if (i > myRefs.current.length - 2) {
      i = myRefs.current.length - 2;
    }
    myRefs.current[i].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    console.log(i);
    index = i;
  }
  return (
    <div className="max">
      <div className="title">
        <h1>Brief History of Stewart</h1>

        <div className="wrapper">
          <div className="centerline">
            <div className={"text-layout"}>
              {timeline.map((time, i) => {
                console.log(i);
                return (
                  <div key={i} className="year-wrapper">
                    <div
                      className="circles"
                      ref={(el) => (myRefs.current[i] = el)}
                      onClick={(e) => {
                        handleClick(i);
                      }}
                    >
                      <div
                        style={{
                          background: time.color,
                        }}
                        className="circle"
                      ></div>
                      <div
                        style={{
                          borderColor: time.color,
                        }}
                        className="circle"
                      ></div>
                      <div className="circle"></div>
                      <div className="circle"></div>

                      <div
                        className="circle"
                        style={{
                          background: time.color,
                        }}
                      ></div>
                      <div
                        className="line"
                        style={{
                          backgroundColor: time.color,
                        }}
                      ></div>
                    </div>
                    <div
                      className="text"
                      style={{
                        color: time.color,
                      }}
                    >
                      {time.year}
                    </div>
                    <div
                      className="word-text"
                      style={{
                        borderColor: time.color,
                      }}
                    >
                      {time.info.line}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="arrow-buttons">
          <button
            onClick={() => {
              index = index - 1;
              handleClick(index);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6.185 4.843l11.927 7.157-11.927 7.157 2.982-7.157-2.982-7.157zm-4.185-4.843l5 12-5 12 20-12-20-12z" />
            </svg>
          </button>
          <button
            onClick={() => {
              index = index + 1;
              handleClick(index);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M6.185 4.843l11.927 7.157-11.927 7.157 2.982-7.157-2.982-7.157zm-4.185-4.843l5 12-5 12 20-12-20-12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
