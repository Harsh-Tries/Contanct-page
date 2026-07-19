import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-black text-gray-400 border-t border-blue/30 animate-fadeIn">
        <div class="container mx-auto px-4 py-10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left place-items-center">
            <div class="flex md:items-start md:flex items-center space-x-3">
              <img src="logo.png" alt="PICT CSI Logo" class="h-12 w-auto" />
              <h1 class="font-bold text-[2rem] leading-none md:text-[2rem] lg:text-[3rem] text-white ">
                PICT <span class="text-blue">CSI</span>
              </h1>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-2">Contact</h3>
              <p>PICT, Dhankawadi, Pune</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:csipict@gmail.com"
                  class="text-blue hover:underline"
                >
                  csipict@gmail.com
                </a>
              </p>
              <p>Phone: +91-1234567890</p>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-2">Quick Links</h3>
              <ul class="space-y-1">
                <li>
                  <Link to="/" class="hover:text-blue">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" class="hover:text-blue">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/events" class="hover:text-blue">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/team" class="hover:text-blue">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" class="hover:text-blue">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-white font-semibold mb-2">Follow Us</h3>
              <div class="flex justify-center items-center md:justify-start space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  class="hover:text-blue"
                >
                  <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill-rule="nonzero"
                      d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  class="hover:text-blue"
                >
                  <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5..." />
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
            <p>
              Made with ❤️ by <span class="text-blue">ThunderCode</span>
            </p>
            <p>© PICT CSI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
