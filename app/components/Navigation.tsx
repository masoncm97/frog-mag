import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Submit", href: "/submit" },
    { title: "Issue 1", href: "/issue-1" },
  ];

  return (
    <nav className="md:fixed md:left-8 md:top-8 w-full flex justify-center md:w-auto md:block mt-8 md:mt-0 z-50">
      <ul className="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-3">
        {navItems.map((item) => (
          <li key={item.href} className="block">
            <Link
              href={item.href}
              className="bodoni-smallcaps text-base md:text-lg hover:text-gray-600 transition-colors block py-1"
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
