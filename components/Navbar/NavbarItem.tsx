import Link from "next/link";

type NavbarType = {
  name: string;
  link: string;
};
const NavbarItem: React.FC<NavbarType> = ({ link, name }) => {
  return (
    <Link href={link}>
      <li className="text-2xl">{name}</li>
    </Link>
  );
};

export default NavbarItem;
