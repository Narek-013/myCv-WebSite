import ContactForm from "./ContactForm";
import ContactSocialBlock from "./ContactSocialBlock";
import "./Contact.css";
import { useEffect, useRef } from "react";
import { getContactScroll } from "../../store/slices/myCvSlices";
import { useDispatch } from "react-redux";


const Contact = () => {


   const dispatch = useDispatch();
   const contactRef = useRef(null);

   useEffect(() => {
     dispatch(getContactScroll(contactRef?.current?.offsetTop));
   }, []);
  

  return (
    <div className="contactMe" ref={contactRef}>
      <h6 >Contact Me</h6>
      <div className="contact">
        <ContactSocialBlock />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
