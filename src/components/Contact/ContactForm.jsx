import emailjs from '@emailjs/browser';

const ContactForm = () => {

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

    ev.target.reset();
  };

    return (
      <div>
        <form className="formEmail" onSubmit={sendEmail}>
          <div className="formArea">
            <label htmlFor="mail">Your Name</label>
            <input
              type="text"
              name="user_name"
              id="mail"
              required
              placeholder="Name"
            />
          </div>
          <div className="formArea">
            <label htmlFor="subject">Your Email</label>
            <input
              type="email"
              name="user_email"
              id="subject"
              required
              placeholder="Jacob@google.com"
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
          <button className="formBtn">Send Message</button>
        </form>
      </div>
    );
}

export default ContactForm;
