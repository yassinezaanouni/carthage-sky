import SvgLogo from "../../public/svg-components/Logo";

const Logo = ({ className }) => {
  return (
    <div className={`f-ai-c font-semibold text-[15px] gap-2 ${className}`}>
      <SvgLogo fontSize="2.5em" />
      <h2 className="max-w-[15ch]">Cartaghe Sky Services</h2>
    </div>
  );
};

export default Logo;
