// importing icons
import { FaSmileWink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-8 px-16 flex gap-4 items-center justify-start max-[700px]:py-6 max-[700px]:px-4 max-[700px]:mt-12 max-[700px]:gap-2">
      <p className="text-[2rem] max-[700px]:text-[1.1rem]">Designed and Built with Passion </p>
      <FaSmileWink className="text-[3rem] max-[700px]:text-[2rem]" />
    </div>
  );
};

export default Footer;
