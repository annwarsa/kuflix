import { FunctionComponent } from "react";
import { FaTelegram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';


interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3">
      <p className="flex gap-2">
        Made with <FaHeart style={{ color: 'red' }} />
      </p>
      <div className="flex gap-3 items-center">
        <p className="hidden md:block">Contact me: </p>
        <div className="flex gap-2">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6e5494] transition duration-300"
          >
            <FaTelegram size={25} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <BsFacebook size={22} />
          </a>
          <a
            href="https://www.discord.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition duration-300"
          >
            <FaDiscord size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
