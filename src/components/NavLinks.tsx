// importing from react-icons
import {
  BsLinkedin,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

const NavLinks = (): JSX.Element => {
  type NavLinkProps = {
    icon: JSX.Element | string;
    link: string;
  };
  const NavLink = ({ icon, link }: NavLinkProps) => {
    return (
      <a href={link} target="_blank" className="grid place-items-center">
        {icon}
      </a>
    );
  };
  return (
    <div className="border-[0.5px] border-[var(--dark-bg)] flex h-16 w-fit py-2 pl-6 pr-6 items-center justify-center gap-4 max-[500px]:w-full max-[500px]:border-none max-[500px]:border-t-[0.5px] max-[500px]:border-[var(--dark-bg)] max-[500px]:py-2 max-[500px]:px-4 max-[500px]:justify-between">
      <NavLink
        icon={<BsFacebook className="font-light text-[1.6rem] fill-[var(--dark-bg)] text-[var(--dark-bg)] hover:fill-[var(--lessdark-bg)] hover:text-[var(--lessdark-bg)] hover:scale-[1.3] transition-all duration-200 max-[700px]:hover:scale-100 max-[500px]:text-[1.4rem]" />}
        link="https://www.facebook.com/mfoniso.upabio"
      />
      <NavLink icon={<BsGithub className="font-light text-[1.6rem] fill-[var(--dark-bg)] text-[var(--dark-bg)] hover:fill-[var(--lessdark-bg)] hover:text-[var(--lessdark-bg)] hover:scale-[1.3] transition-all duration-200 max-[700px]:hover:scale-100 max-[500px]:text-[1.4rem]" />} link="https://github.com/AirZED" />
      <NavLink icon={<BsTwitter className="font-light text-[1.6rem] fill-[var(--dark-bg)] text-[var(--dark-bg)] hover:fill-[var(--lessdark-bg)] hover:text-[var(--lessdark-bg)] hover:scale-[1.3] transition-all duration-200 max-[700px]:hover:scale-100 max-[500px]:text-[1.4rem]" />} link="https://twitter.com/Mfonisoh1" />
      <NavLink
        icon={<BsInstagram className="font-light text-[1.6rem] fill-[var(--dark-bg)] text-[var(--dark-bg)] hover:fill-[var(--lessdark-bg)] hover:text-[var(--lessdark-bg)] hover:scale-[1.3] transition-all duration-200 max-[700px]:hover:scale-100 max-[500px]:text-[1.4rem]" />}
        link="https://www.instagram.com/mfoniso_ukpabio/"
      />
      <NavLink
        icon={<BsLinkedin className="font-light text-[1.6rem] fill-[var(--dark-bg)] text-[var(--dark-bg)] hover:fill-[var(--lessdark-bg)] hover:text-[var(--lessdark-bg)] hover:scale-[1.3] transition-all duration-200 max-[700px]:hover:scale-100 max-[500px]:text-[1.4rem]" />}
        link="https://www.linkedin.com/in/mfoniso-ukpabio-865b24207/"
      />
      <NavLink
        icon={<h2 className="font-light text-[1.6rem] fill-[var(--dark-bg)] text-[var(--dark-bg)] hover:fill-[var(--lessdark-bg)] hover:text-[var(--lessdark-bg)] hover:scale-[1.3] transition-all duration-200 max-[700px]:hover:scale-100 max-[500px]:text-[1.4rem]">Resume</h2>}
        link="https://docs.google.com/document/d/1Q5LNk5qjti3Hna5kbmUxuacebAR9QbUj/edit?usp=sharing&ouid=115293776637959482532&rtpof=true&sd=true"
      />
    </div>
  );
};

export default NavLinks;
