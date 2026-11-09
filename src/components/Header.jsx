```jsx
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-6 md:px-12 py-6 relative">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.PNG"
            alt="Movies Bazer Logo"
            className="w-[190px] md:w-[230px] h-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="/" className="text-white">Home</a>
          <a href="#trending">Explore</a>
          <a href="#trending">Genre</a>
          <a href="#movies">News</a>
          <a href="#movies">Movies</a>
          <a href="#movies">TV Shows</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-gray-950 z-50 flex flex-col gap-5 px-6 py-6 text-gray-300 shadow-lg">

          <a href="/" onClick={() => setIsMenuOpen(false)} className="text-white">
            Home
          </a>

          <a href="#trending" onClick={() => setIsMenuOpen(false)}>
            Explore
          </a>

          <a href="#trending" onClick={() => setIsMenuOpen(false)}>
            Genre
          </a>

          <a href="#movies" onClick={() => setIsMenuOpen(false)}>
            News
          </a>

          <a href="#movies" onClick={() => setIsMenuOpen(false)}>
            Movies
          </a>

          <a href="#movies" onClick={() => setIsMenuOpen(false)}>
            TV Shows
          </a>

        </nav>
      )}

    </header>
  );
}

export default Header;
```
