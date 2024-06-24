import SvgLogo from "../../public/svg-components/Logo";

const Logo = ({ className, fontSize }) => {
  return (
    <div className={`f-ai-c gap-2 text-[15px] font-semibold ${className}`}>
      <SvgLogo fontSize={fontSize} />
      <h2 className="max-w-[15ch]">Carthage Sky Services</h2>
    </div>
  );
};

export default Logo;
