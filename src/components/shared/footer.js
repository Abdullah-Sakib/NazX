import {
  FaFacebookF,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#110f0d]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-3xl ">NazX</span>
          </a>
          <p className="mt-2 text-sm text-gray-300">
            (Building-1) 8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali
            C/A, Dhaka 1212, Bangladesh
          </p>
          <p className="mt-4 text-sm text-gray-300">
            (Building-1) 8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali
            C/A, Dhaka 1212, Bangladesh
          </p>
          <div className="mt-7 flex justify-between items-center flex-wrap">
            <div className="bg-gray-600 hover:bg-gray-300 text-white hover:text-gray-700 p-2 rounded duration-150 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-gray-700 hover:bg-gray-300 text-white hover:text-gray-700 p-2 rounded duration-150 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-gray-700 hover:bg-gray-300 text-white hover:text-gray-700 p-2 rounded duration-150 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-gray-700 hover:bg-gray-300 text-white hover:text-gray-700 p-2 rounded duration-150 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="bg-gray-700 hover:bg-gray-300 text-white hover:text-gray-700 p-2 rounded duration-150 cursor-pointer">
              <FaMediumM />
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">
              Get In Touch
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Tel: 02-222390728
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801504055220 (Reception)
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801404054226{" "}
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801404055427 (HR)
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">
              Get In Touch
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Tel: 02-222390728
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801504055220 (Reception)
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801404054226{" "}
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801404055427 (HR)
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-md mb-3">
              Get In Touch
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Tel: 02-222390728
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801504055220 (Reception)
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801404054226{" "}
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-500">
                  Mob: +8801404055427 (HR)
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
