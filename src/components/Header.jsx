function Header({ title }) {
  return (
    <header className="bg-gradient-to-b from-[#E50914] to-[#B30000] text-white text-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
    </header>
  );
}

export default Header;