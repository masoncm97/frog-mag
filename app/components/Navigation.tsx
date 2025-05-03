import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Submit", href: "/submit" },
    { title: "Issue 1", href: "/issue-1" },
  ];

  return (
    <nav className="absolute top-4 left-4 md:left-8 md:top-8">
      <ul className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="bodoni-smallcaps text-sm md:text-lg hover:text-gray-600 transition-colors"
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
