import Image from "next/image";

const Logo = () => {
  return (
    <Image height={130} width={130} alt="logo" src="logo.svg" priority={true} />
  );
};
export default Logo;
