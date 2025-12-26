function Header() {
  return (
    <div className="bg-blue-500 p-3 mt-3 rounded-2xl flex justify-between items-center">
      <h1 className="text-3xl font-bold">Crypto App</h1>

      <div className="flex gap-2 items-center">
        <span>Next.js</span>

        <div className="w-px h-8 bg-white" />

        <span className="text-gray-900">Ehsan Hakim</span>
      </div>
    </div>
  );
}

export default Header;
