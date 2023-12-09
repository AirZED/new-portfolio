// importing from react-icons
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

import style from "./../styles/NavLinks.module.css";

const NavLinks = (): JSX.Element => {
  type NavLinkProps = {
    icon: JSX.Element | string;
    link: string;
  };
  const NavLink = ({ icon, link }: NavLinkProps) => {
    return (
      <a href={link} target="_blank">
        {icon}
      </a>
    );
  };
  return (
    <div className={style.navlinks}>
      <NavLink
        icon={<BsFacebook />}
        link="https://www.facebook.com/mfoniso.upabio"
      />
      <NavLink icon={<BsGithub />} link="https://github.com/AirZED" />
      <NavLink icon={<BsTwitter />} link="https://twitter.com/Mfonisoh1" />
      <NavLink
        icon={<BsInstagram />}
        link="https://www.instagram.com/mfoniso_ukpabio/"
      />
      <NavLink
        icon={<BsLinkedin />}
        link="https://www.linkedin.com/in/mfoniso-ukpabio-865b24207/"
      />
      <NavLink
        icon={<h2>Resume</h2>}
        link="https://docs.google.com/document/d/1Q5LNk5qjti3Hna5kbmUxuacebAR9QbUj/edit?usp=sharing&ouid=115293776637959482532&rtpof=true&sd=true"
      />
    </div>
  );
};

export default NavLinks;
