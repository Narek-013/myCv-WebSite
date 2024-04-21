import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ContactSocialBlock = () => {
  
  return (
    <div className="z-10">
      <h5 className="text-xl font-bold text-white my-2 lightModT">Let&apos;s Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        {" "}
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="social">
        <Link target="blank" to="https://github.com/Narek-013">
          <FaGithub className="github" />
        </Link>
        <Link target="blank" to="https://www.linkedin.com/in/narek-meliksetyan-838481301/">
          <FaLinkedin className="linkdin" />
        </Link>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute  transform -translate-x-1/2 -translate-1/2 radSoc"></div>
    </div>
  );
};

export default ContactSocialBlock;
