import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Auth from "./Auth";



const Navbar = () => {
  return (
    <div className="lp-navbar">
      <Logo />
      <NavLinks />
      <Auth />
    </div>
  );
};

export default Navbar;
