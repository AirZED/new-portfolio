const Footer = () => {
  return (
    <div className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-8 px-16 flex items-center justify-between max-[700px]:py-6 max-[700px]:px-4 max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-2">
      <p className="text-[1.5rem] font-black max-[700px]:text-[1.1rem]">Mfoniso Ukpabio</p>
      <p className="text-[1rem] opacity-50 max-[700px]:text-[0.85rem]">
        © {new Date().getFullYear()} — Designed &amp; Built with care
      </p>
    </div>
  );
};

export default Footer;
