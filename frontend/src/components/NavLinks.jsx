const NavLinks = () => {
  const links = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="lp-nav-links">
      {links.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
