import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBtn, changeBtnErr, selectMyCv } from '../../store/slices/myCvSlices';

const ContactForm = () => {
  const btnRef = useRef(null)
  const thanksP = useRef(null)
  const emailRef = useRef(null)
  const dispatch = useDispatch()
  const { contactBtn, mailValue } = useSelector(selectMyCv);
  

  const seeValue = (ev) => {
    const txt = ev.target.value;
    emailRef.current.textContent = "The type is incorrect"
    if (
      txt.includes("@gmail.com") ||
      txt.includes("@gmail.am") ||
      txt.includes("@mail.ru") ||
      txt.includes("@mail.am") ||
      txt.includes("@mail.com") ||
      txt.includes("@bk.ru") ||
      txt.includes("@inbox.") ||
      txt.includes("@Yahoo.")
    ) {
      dispatch(changeBtn(txt));
      emailRef.current.textContent = "Your Email";
    } else {
      dispatch(changeBtnErr());

      thanksP.current.classList.remove("blockP");
    }
  }
 

  const sendEmail = (ev) => {
    ev.preventDefault();

    const serviceId = "service_6muu1yb";
    const publicKey = "TcfgM1bUDeOz9R0iP";
    const templateId = "template_9hdc2np";

    const {
      user_name: { value: user_name },
      user_email: { value: user_email },
      message: { value: message },
    } = ev.target;

    const templateParams = {
      from_name: user_name,
      from_email: user_email,
      message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("succses");
      })
      .catch((error) => {
        console.log(error);
      });

      btnRef.current.classList.add("noneBtn")
      thanksP.current.classList.add("blockP")
      ev.target.reset();
  };

    return (
      <div>
        <form className="formEmail" onSubmit={sendEmail}>
          <div className="formArea">
            <label htmlFor="mail">Thank you for contacting us!</label>
            <input
              type="text"
              name="user_name"
              id="mail"
              required
              className='nameClient'
              placeholder="Name"
              maxLength={15}
            />
          </div>
          <div className="formArea">
            <label  ref={emailRef} htmlFor="email">Your Email</label>
            <input
              onChange={seeValue}
              type="email"
              name="user_email"
              id="email"
              required
              maxLength={34}
              placeholder={"Jacob@google.com"}
            />
          </div>
          <div className="formArea">
            <label htmlFor="message">Message</label>
            <textarea
              id="w3review"
              required
              name="message"
              rows="2"
              cols="50"
              className="textArea"
              maxLength={250}
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          {contactBtn ? (
            <button ref={btnRef} className="formBtn">
              Send Message
            </button>
          ) : (
            <button className="formBtn changeValue">Send</button>
          )}
          <p ref={thanksP} className="thanks">
            Thank You{" "}
          </p>
        </form>
      </div>
    );
}

export default ContactForm;
