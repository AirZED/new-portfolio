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
        link="https://drive.google.com/file/d/1ctGB1RLS_PBtL1uUdK2YZdl_r-Afmy2J/view?pli=1"
      />
    </div>
  );
};

export default NavLinks;
