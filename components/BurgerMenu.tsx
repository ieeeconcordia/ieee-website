import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className="pr-2" onClick={handleMenuToggle}>
        <IoMenuOutline size={40}/>
      </button>
      {isMenuOpen && (
        <div className="menu">
          Hi
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
