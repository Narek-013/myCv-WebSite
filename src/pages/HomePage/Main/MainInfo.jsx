import { TypeAnimation } from "react-type-animation";
import { selectMyCv } from "../../../store/slices/myCvSlices";
import { useSelector } from "react-redux";
import { images } from "../../../Images/Images";


const MainInfo = () => {
  const pdfFile = "http://localhost:3001/myCv.pdf";

  
  const {contactScroll } = useSelector(selectMyCv);

 const changeScroll = () => {
   window.scrollTo({ behavior: "smooth", top: contactScroll - 81 });
 };


  return (
    <div>
      <div>
        <div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col"
        >
          <h1 className="text ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Narek",
                1000,
                "Frontend Developer",
                1000,
                "js Developer",
                1000,
                "React Developer",
                1000,
                "Next Developer",
                1000,
              ]}
              className="mainSpan"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="loremTxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div className="mainBtn">
            <button
              onClick={changeScroll}
              to="hero"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire me
            </button>
            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 light">
              <span href={images.user}  download={"myCv"} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href={pdfFile} download="myCv" className="aDown"> Download CV</a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
