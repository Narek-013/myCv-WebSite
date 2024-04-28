import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMyCv } from "../../../store/slices/myCvSlices";

const InfoMe = () => {
  const [count, setCount] = useState(false);
  const {likesCounts } =useSelector(selectMyCv);

  const myInfo = [
    {
      name: "Projects",
      count: 10,
    },
    {
      name: "Users",
      count: 100,
    },
    {
      name: "Likes",
      count: likesCounts.likes,
    },
    {
      name: "Years",
      count: 1,
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border  mediaBlocks">
        {myInfo.map((el, index) => {
          return (
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
              key={el.count}
            >
              <div
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row mediF lightModes countInfo">
                  {count && (
                    <CountUp start={0} end={el.count} duration={2} delay={0} />
                  )}
                </h2>
                <p className="text-[#ADB7BE] text-base mediaTxt">{el.name}</p>
              </div>
            </ScrollTrigger>
          );
        })}
      </div>
    </div>
  );
};
export default InfoMe;
