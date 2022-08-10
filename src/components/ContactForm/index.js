import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";
import './style.css';

function ContactForm() {
    const [showModal, setShowModal] = useState(false)
    const toggleShow = () => setShowModal(!showModal);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3iyehmh', 'nuttletta_template', e.target, 'bn1x35P5FogJCFbw_')
            .then((result) => {
                console.log(result.text);
                setShowModal(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-2 mx-auto">
                            <input type="submit" className="btn sendButton" value="Send"></input>
                        </div>
                    </div>
                </form>
            </div>

            {showModal && (
                <ToastContainer position='top-center'>
                    <Toast show={showModal} onClose={toggleShow}>
                        <Toast.Header>
                            <strong className="me-auto">Nuttletta Wedding</strong>
                        </Toast.Header>
                        <Toast.Body>Your message was sent!</Toast.Body>
                    </Toast>
                </ToastContainer>
            )}
        </div>

    )
}

export default ContactForm;