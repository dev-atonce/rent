

const BurgerMenu = () => {
  return (
    <div className="relative block md:hidden">
      <nav className={`absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col">
          <li className="p-2 border-b border-slate-200"><a href="#home">Home</a></li>
          <li className="p-2 border-b border-slate-200"><a href="#about">About</a></li>
          <li className="p-2 border-b border-slate-200"><a href="#services">Services</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;