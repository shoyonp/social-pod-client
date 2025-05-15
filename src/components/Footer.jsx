import toast from "react-hot-toast";
import logo from "../assets/assets/icons8-communicate-pieces-96.png";
import { useRef } from "react";
const Footer = () => {
  const emailRef = useRef();
  const handleSentEmail = () => {
    const email = emailRef.current.value;
    console.log(email);
    // toast.success("Email sent");
  };
  return (
    <>
      <footer className="bg-white border-t border-gray-200 text-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand Info */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <img src={logo} className="w-8 md:w-9" alt="Logo" />
                <h2 className="text-xl font-semibold text-blue-600">
                  Social Pods
                </h2>
              </div>
              <p className="text-sm text-gray-600">
                A modern platform for sharing thoughts, ideas, and stories with
                the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-md font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/" className="hover:text-blue-600 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-600 transition">
                    Posts
                  </a>
                </li>
                <li>
                  <a href="/aboutPage" className="hover:text-blue-600 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-600 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social + Newsletter */}
            <div>
              <h3 className="text-md font-semibold mb-2">Stay Connected</h3>
              <div className="flex justify-center md:justify-start space-x-4 text-blue-600">
                <a href="#" className="hover:text-blue-800 transition">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-800 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-800 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-800 transition">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Subscribe to get the latest updates.
              </p>
              <div className="mt-2 flex items-center">
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Your email"
                  required
                  className="px-3 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSentEmail}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition text-sm"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t pt-4 text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Social Pods. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
