import "./App.css";
import { useRef } from "react";

let isDown = false;
let startX;
let scrollLeft;
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
      line: "Successfully commissioned 1st 500 MTPD StewartFloat® tin bath in Indonesia (turn-key)",
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
      line: "4th StewartFloat®  - Indonesia (500 MTPD)\n5th StewartFloat®  - China (500 MTPD from 0.55 to 19mm)\nSeveral R&D innovations",
    },
    color: "coral",
  },
  {
    year: 2000,
    info: {
      line: "7th StewartFloat®  - Iran \nDevelops Ultra Thick Glass \nDevelops Borosilicate tin bath",
    },
    color: "grey",
  },
  {
    year: 2002,
    info: {
      line: "8th StewartFloat® - China\n9th StewartFloat®  - Italy \n10th StewartFloat®   - Iran \nUltra Clear Glass developed",
    },
    color: "blue",
  },
  {
    year: 2003,
    info: {
      line: "11th StewartFloat® - China\nAcuraCoat® CVD Technology developed",
    },
    color: "purple",
  },
  {
    year: 2004,
    info: {
      line: "12th StewartFloat® - China \n 13th StewartFloat® - China",
    },
    color: "green",
  },
  {
    year: 2005,
    info: {
      line: "14th StewartFloat® – China (700 MTPD 3-25mm)\nAcuraCoat® developed for Reflective, LowE, SC, PV and Self Clean Coatings",
    },
    color: "orange",
  },
  {
    year: 2006,
    info: {
      line: "Granted trademarks for StewartFloat®  and AcuraCoat® \n2 contracts signed for AcuraCoat®",
    },
    color: "red",
  },
  {
    year: 2007,
    info: {
      line: "15th StewartFloat® - Russia\n16th StewartFloat® – Turkey 17th StewartFloat® - Russia 1st AcuraCoat® - China",
    },
    color: "darkblue",
  },
  {
    year: 2009,
    info: {
      line: "18th StewartFloat® – India\n19th StewartFloat® – Saudi Arabia  \n2nd AcuraCoat® - China\n3rd AcuraCoat® - China",
    },
    color: "green",
  },
  {
    year: 2010,
    info: {
      line: "20th StewartFloat® – Italy\n2nd EcoMelt®  Ultra Clear - Italy \n4th AcuraCoat® - China",
    },
    color: "black",
  },
  {
    year: 2012,
    info: {
      line: "Developed Temperature Profile Control System\nExpanded services for float glass facilities",
    },
    color: "teal",
  },
  {
    year: 2013,
    info: {
      line: "Low-E PRO developed\nNew design for Top Roll machine & emission control system with Tin Recovery",
    },
    color: "orange",
  },
  {
    year: 2015,
    info: {
      line: "Awarded EPC Contract for turn-key float glass facility in Kazakhstan \n23rd StewartFloat® - Kazakhstan",
    },
    color: "coral",
  },
  {
    year: 2017,
    info: {
      line: "Completed EcoMelt® Furnace Technology\nConducted marketing program for pyrolytic products in Africa",
    },
    color: "blue",
  },
  {
    year: 2021,
    info: {
      line: "Marketing Program for anti-microbial CVD Glass",
    },
    color: "red",
  },
];

function App() {
  const myRefs = useRef([]);
  const wrapper = useRef();
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

    index = i;
  }
  return (
    <div className="max">
      <div className="title">
        <h1>Brief History of Stewart</h1>

        <div
          ref={wrapper}
          onMouseMove={(e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - wrapper.current.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            wrapper.current.scrollLeft = scrollLeft - walk;
            console.log(walk);
          }}
          onMouseDown={(e) => {
            console.log("mouse down");
            isDown = true;
            startX = e.pageX - wrapper.current.offsetLeft;
            console.log(e.pageX, wrapper.current.offsetLeft);
            scrollLeft = wrapper.current.scrollLeft;
          }}
          onMouseUp={() => {
            isDown = false;
          }}
          onMouseLeave={() => {
            isDown = false;
          }}
          className="wrapper"
        >
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
