import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Submit", href: "/submit" },
    { title: "Vol 1", href: "/volume-1" },
    { title: "Vol 2", href: "/volume-2" },
    { title: "Vol 3", href: "/volume-3" },
  ];

  return (
    <nav className="fixed top-4 md:top-8 w-full md:w-auto md:left-8 z-50">
      <ul className="flex flex-row justify-center space-x-4 md:flex-col md:space-x-0 md:space-y-3 px-4 md:px-0">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="bodoni-smallcaps text-sm md:text-lg hover:text-gray-600 transition-colors block py-1"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
