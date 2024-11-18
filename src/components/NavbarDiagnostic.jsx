import { logo } from "../assets";


const NavbarDiagnostic = () => {
  

  return (
    <nav className="pl-20 w-full flex py-6 justify-between items-center navbar">
  <img src={logo} alt="hoobank" className="w-[124px] h-[32px] mt-4" />
  <a href="#" className="text-white hover:underline text-sm font-medium">Username</a>
</nav>
  );
};

export default NavbarDiagnostic;
