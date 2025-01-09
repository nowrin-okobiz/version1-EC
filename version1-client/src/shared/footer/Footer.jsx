import { Link } from "react-router-dom";
import facebookImg from "../../assets/facebook.png";
import whatsappImg from "../../assets/whatsapp.png";
import instaImg from "../../assets/instagram.png";
import youtubeImg from "../../assets/youtube.png";
import getwayImg from "../../assets/getway.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "motion/react";
export default function Footer() {
  return (
    <div>
      {/* part 1 */}
      <div className=" bg-black">
        <div className=" grid md:grid-cols-12 gap-4 justify-between max-w-6xl mx-auto text-white md:p-6 p-2">
          {/* 1st column */}
          <div className="col-span-3 text-start md:p-5 ">
            <ul className="cursor-pointer">
              <Link to={"/about"}>
                <li className="font-bold text-xl hover:text-[#f26e21] cursor-pointer">
                  About US
                </li>
              </Link>{" "}
              <li className="py-2">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CiLocationOn />
                  </span>
                  <h1>address</h1>
                </div>
              </li>{" "}
              <li className="py-2">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <MdEmail />
                  </span>
                  <h1>gadget@gmail.com</h1>
                </div>
              </li>{" "}
              <li className="py-2">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <MdEmail />
                  </span>
                  <h1>sales@gadget.com.bd</h1>
                </div>
              </li>{" "}
              <li className="py-2">
                <div className="flex items-center gap-2">
                  {" "}
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <h1>017777711</h1>
                </div>
              </li>
              <Link>
                {" "}
                <li className="py-1">
                  <div className="flex items-center gap-2">
                    <span>
                      <img className="w-7 h-6" src={facebookImg} alt="" />
                    </span>
                    <span>
                      <img className="w-7 h-6" src={whatsappImg} alt="" />
                    </span>
                    <span>
                      <img className="w-7 h-6" src={youtubeImg} alt="" />
                    </span>
                    <span>
                      <img className="w-7 h-6" src={instaImg} alt="" />
                    </span>
                  </div>
                </li>
              </Link>
              <Link>
                {" "}
                <li className="py-1">
                  <div className="flex items-center gap-2">
                    <span>
                      <img className="w-full h-6" src={getwayImg} alt="" />
                    </span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          {/* 2nd column */}
          <div className="col-span-3 text-start md:p-5  ">
            <ul className="">
              <Link to={"/contact"}>
                {" "}
                <li className="font-bold text-xl hover:text-[#f26e21] cursor-pointer">
                  Contact
                </li>
              </Link>

              <Link>
                <li className="py-2">
                  <div className="flex items-center gap-2">
                    <img src={facebookImg} className="h-5 w-5" alt="" />
                    <h1>FaceBook</h1>
                  </div>
                </li>
              </Link>
              <Link>
                {" "}
                <li className="py-2">
                  <div className="flex items-center gap-2">
                    <img src={whatsappImg} className="h-5 w-5" alt="" />
                    <h1>WhatsApp</h1>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          {/* 3rd column */}
          <div className="col-span-3 text-start md:p-5  ">
            <ul className="">
              <li className="font-bold text-xl">Shipping Info.</li>

              <Link>
                <motion.li
                  className="py-2"
                  whileHover={{
                    x: 4,
                    color: "#f26e21",
                  }}
                >
                  Shipping rates & policies
                </motion.li>
              </Link>
              <Link>
                {" "}
                <motion.li
                  className="py-2"
                  whileHover={{
                    x: 4,
                    color: "#f26e21",
                  }}
                >
                  Refunds & replacements
                </motion.li>
              </Link>
              <Link>
                {" "}
                <motion.li
                  className="py-2 "
                  whileHover={{
                    x: 4,
                    color: "#f26e21",
                  }}
                >
                  Delivery info
                </motion.li>
              </Link>
              <Link>
                {" "}
                <motion.li
                  className="py-2 "
                  whileHover={{
                    x: 4,
                    color: "#f26e21",
                  }}
                >
                  About Us
                </motion.li>
              </Link>
            </ul>
          </div>
          <div className=" col-span-3 text-start md:p-5 flex flex-col">
            <h1 className="font-bold text-xl">Stay connected </h1>
            <div className="w-full h-full bg-contain flex gap-2 items-center bg-[url('https://i.ibb.co.com/PG8p4ct/map.png')]"></div>
          </div>
        </div>
      </div>
      <hr />
      {/* part 2 */}
      <div className="bg-black text-white md:p-6 p-2 flex justify-center items-center">
        <h1>
          ©2024 Nexlinbd, All rights reserved. Developed by{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            whileHover={{
              x: 4,
              color: "#f26e21",
            }}
            className="font-bold px-2 text-xl"
          >
            <Link>okobiz</Link>
          </motion.span>
        </h1>
        {/* <div>
          <div className="flex items-center gap-2">
            <span>
              <img className="w-10 h-10" src={facebookImg} alt="" />
            </span>
            <span>
              <img className="w-10 h-10" src={whatsappImg} alt="" />
            </span>
            <span>
              <img className="w-10 h-10" src={youtubeImg} alt="" />
            </span>
            <span>
              <img className="w-10 h-10" src={instaImg} alt="" />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
