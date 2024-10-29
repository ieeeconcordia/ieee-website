import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { push as Menu } from "react-burger-menu";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Menu
      width={300}
      menuClassName="bg-gray-500 absolute h-full w-full mt-6"
      overlayClassName="bg-black "
      itemListClassName="w-full"
      isOpen={isMenuOpen}
      customBurgerIcon={<MdMenu size={35} />}
      right
    >
      {/* Render your navigation links here */}
      <Link href="/about">About Us</Link>

      <Link href="/events">Events</Link>

      <Link href="/projects">Projects</Link>

      <p className="line-through decoration-2">Lab</p>

      <Link href="contact">Contact us</Link>
    </Menu>
  );
};

export default BurgerMenu;
