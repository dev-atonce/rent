import Link from "next/link";
import NavDropDown from "./NavDropdown";
import menuItem from "./menuItem.json";

export default function NavBar() {
  return (
    <ul className="nav-menu inline-flex" id="scrollable-content">
      {menuItem.map((item: any, key: number) => {
        if (item.subMenu)
          return (
            <NavDropDown
              title="เกี่ยวกับเรา"
              dropdownItems={item.subMenu}
              key={key}
            />
          );
        else
          return (
            <li className="menu-item" key={key}>
              <Link
                href={item.href}
                className={`p-4 nav-button hover:text-white`}
                key={key}
              >
                {item.title}
              </Link>
            </li>
          );
      })}
    </ul>
  );
}
