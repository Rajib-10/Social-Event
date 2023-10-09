import contactImg from "../../../src/assets/contact.jpg"
import { MdOutlineLocationOn } from 'react-icons/md';
import {BsPhone} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <div>
                <img className="h-[70vh] w-full object-cover opacity-60" src={contactImg} alt="" />
            </div>

            <h1 className="font-bold text-xl md:text-2xl text-center mt-10 mb-4">Get in touch with us!</h1>

            <div className="flex flex-col md:flex-row justify-evenly items-center gap-6">
                
                <div className="text-center">
                    <MdOutlineLocationOn className="mx-auto text-xl" />
                    <h1 className="font-semibold">Address</h1>
                    <p>123, Main Road Dhanmondi</p>
                    <p>Dhaka-1205 Bangladesh</p>
                </div>

                <div className="text-center">
                    <BsPhone  className="mx-auto text-xl" />
                    <h1 className="font-semibold">Phone</h1>
                    <p>+880 123 456 789</p>
                    <p>+880 123 456 789</p>
                </div>

                <div className="text-center">
                    <AiOutlineMail className="mx-auto text-xl" />
                    <h1 className="font-semibold">Email</h1>
                    <p>Email: socialevent@gmail.com</p>
                    <p>Email: socialevent@yahoo.com</p>
                </div>
            </div>
            <div className="text-center py-10">
                <h1 className="font-bold text-xl md:text-2xl mb-3">If You Got Any Question</h1>
                <h1 className="font-bold text-lg md:text-xl mb-4">Do Not Mistake to Send Us Message</h1>
                <form className="space-y-4 ">
                    <input className="px-4 py-3 border rounded-md w-full md:w-3/4 lg:w-1/2" type="text" name="name" placeholder="Your Name..." /> <br />
                    <input className="px-4 py-3 border rounded-md w-full md:w-3/4 lg:w-1/2" type="email" name="email" placeholder="Email..."  /><br />
                    <textarea className="px-4 py-3 border w-full md:w-3/4 lg:w-1/2" name="textarea" placeholder="Message..." cols="22" rows="5"></textarea><br />
                    <input className="btn btn-primary" type="button" value="Send Message" />
                </form>
                <h1 className="py-7 text-xl font-bold">Connect with Us...</h1>
                <div className="flex items-center justify-center gap-6 cursor-pointer text-xl">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </div>
        </div>
    );
};

export default Contact;