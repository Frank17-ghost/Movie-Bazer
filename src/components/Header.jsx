function Header() {
    return(
         <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">
          🎬  Movies Bazer<span className="text-purple-500">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="text-white">Home</a>
          <a href="#trending">Explore</a>
          <a href="#trending">Genre</a>
          <a href="#movies">News</a>
          <a href="#movies">Movies</a>
          <a href="#movies">TV Shows</a>
        </nav>

        <button className="md:hidden text-2xl">☰</button>
      </header>

    )
}
export default Header