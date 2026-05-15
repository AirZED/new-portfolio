import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";

const RESUME_URL = "https://docs.google.com/document/d/1rzrSKSVg3U7rhl44JQMVYPn3YXWOFe4l/edit";

const socialLinks = [
  { icon: BsFacebook,  href: "https://www.facebook.com/mfoniso.upabio",               label: "Facebook"  },
  { icon: BsGithub,    href: "https://github.com/AirZED",                              label: "GitHub"    },
  { icon: BsTwitter,   href: "https://twitter.com/Mfonisoh1",                          label: "Twitter"   },
  { icon: BsInstagram, href: "https://www.instagram.com/mfoniso_ukpabio/",             label: "Instagram" },
  { icon: BsLinkedin,  href: "https://www.linkedin.com/in/mfoniso-ukpabio-865b24207/", label: "LinkedIn"  },
];

const NavLinks = (): JSX.Element => {
  return (
    <div className="flex items-center gap-4 flex-wrap max-[500px]:gap-3">

      {/* Social icons */}
      <div className="flex items-center gap-1">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 grid place-items-center rounded-full transition-all duration-200 hover:bg-black/5 group"
          >
            <Icon className="text-[1.5rem] text-[var(--dark-bg)] group-hover:text-[var(--lessdark-bg)] transition-colors duration-200" />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="h-6 w-[0.5px] bg-[var(--dark-bg)] opacity-30" />

      {/* Resume button */}
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-5 py-2 border-[1.5px] border-[var(--accent-color1)] text-[var(--accent-color1)] rounded-full font-semibold text-[1rem] tracking-wide transition-all duration-200 hover:bg-[var(--accent-color1)] hover:text-white no-underline"
      >
        Resume
        <MdOutlineArrowOutward className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </a>

    </div>
  );
};

export default NavLinks;
