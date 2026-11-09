function Main() {
    return(
        <main className="max-w-7xl mx-auto px-6 md:px-12">
   <section className="grid md:grid-cols-2 items-center gap-10 lg:gap-14 min-h-[520px] px-4 md:px-0 py-12">

      {/* LEFT SIDE - TEXT */}
      <div className="relative z-10">

        <p className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight">
          FIND MOVIES
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-[48px] font-black uppercase leading-[1.05] tracking-tight whitespace-nowrap">

          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            TV SHOWS AND MORE
          </span>

        </h1>

        <p className="text-gray-400 text-xs md:text-sm leading-[1.35] mt-5 max-w-[340px]">
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type
          specimen book.
        </p>

        {/* WATCH TUTORIAL BUTTON */}
         
<button className="border border-white rounded-md px-4 py-2 flex items-center gap-2 text-xs text-white hover:bg-white hover:text-black transition duration-300">

  {/* Real SVG play icon */}
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="white" />

    <path
      d="M10 7.5L17 12L10 16.5V7.5Z"
      fill="black"
    />
  </svg>

  <span>Watch Tutorial</span>

</button>




      </div>


      {/* RIGHT SIDE - MOVIE POSTERS */}
      <div className="relative w-full h-[430px] md:h-[450px] flex items-center justify-center">

        {/* DECORATIVE BORDER */}
        <div className="absolute left-0 bottom-0 w-full h-[65%] border-t border-r border-b border-purple-400/20 pointer-events-none">
        </div>


        {/* GUARDIANS POSTER - BACK */}
        <img
          src="data:image/webp;base64,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"
          alt="Guardians of the Galaxy"
          className="absolute right-2 md:right-3 top-0 w-[45%] h-[72%] object-cover shadow-2xl"
        />


        {/* SPIDER-MAN POSTER - FRONT */}
        <div className="absolute left-[5%] bottom-[5%] w-[57%] h-[80%] z-10">

          <img
            src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
            alt="Spider-Man Across the Spider-Verse"
            className="w-full h-full object-cover shadow-2xl"
          />

          {/* PLAY BUTTON - CENTERED ON SPIDER-MAN */}
        
{/* PLAY BUTTON CENTERED ON SPIDER-MAN */}
        <button
         aria-label="Play movie trailer"
         className="absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
       z-20 w-12 h-12 md:w-14 md:h-14
      bg-white rounded-full
      flex items-center justify-center
      shadow-lg hover:scale-110
       transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="black"
  >
    <path d="M7 4.5C7 3.7 7.9 3.2 8.6 3.7L20 11.2C20.7 11.7 20.7 12.3 20 12.8L8.6 20.3C7.9 20.8 7 20.3 7 19.5V4.5Z" />
  </svg>
</button>

        </div>

      </div>

    </section>



        {/* TRENDING SECTION */}
        <section id="trending" className="mt-16">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl">
              <span className="text-yellow-400">♨</span> Trending
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* TRENDING MOVIE DATA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              {
                title: "Guardians of the Galaxy",
                year: "2023",
                image: "kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "Shazam! Fury of the Gods",
                year: "2023",
                image: "A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
              },
              {
                title: "Dungeons & Dragons",
                year: "2023",
                image: "A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
              },
              {
                title: "The Pregnancy Promise",
                year: "2023",
                image: "q719jXXEzOoYaps6babgKnONONX.jpg"
              },
              {
                title: "John Wick Chapter 4",
                year: "2023",
                image: "vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              },
              {
                title: "Spider-Man",
                year: "2023",
                image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              },
              {
                title: "Oppenheimer",
                year: "2023",
                image: "ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
              },
              {
                title: "Barbie",
                year: "2023",
                image: "iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              },
              {
                title: "Avatar",
                year: "2022",
                image: "kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
              },
              {
                title: "Kung Fu Panda 4",
                year: "2024",
                image: "kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "The Batman",
                year: "2022",
                image: "74xTEgt7R36Fpooo50r9T25onhq.jpg"
              },
              {
                title: "Black Panther",
                year: "2022",
                image: "sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
              }
            ].map((movie, index) => (

              <div key={index} className="group cursor-pointer">

                <img
                   src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                   alt={movie.title}
                 onError={(e) => {
               e.currentTarget.src = "/fallback.jpg";
        }}
/>

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year} <span className="text-red-500">•</span> 104m
                </p>

              </div>

            ))}

          </div>
        </section>



        {/* YOU MAY LIKE THIS */}
        <section id="movies" className="mt-24">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl uppercase">
              You May Like This
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* RECOMMENDED MOVIES DATA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              {
                  title: "Black Panther",
                year: "2022",
                image: "sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
              },
              {
                title: "Mojave Diamonds",
                year: "2023",
                image: "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
              },
              {
                title: "Mojave",
                year: "2023",
                image: "1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
              },
              {
                title: "Crossfire",
                year: "2023",
                image: "iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              },
              {
               title: "Oppenheimer",
                year: "2023",
                image: "ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
              },
              {
                title: "The Pregnancy Promise",
                year: "2023",
                image: "q719jXXEzOoYaps6babgKnONONX.jpg"
              },
              {
                title: "The Days",
                year: "2023",
                image: "kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "Days of Daisy",
                year: "2023",
                image: "A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
              },
              {
                 title: "Spider-Man",
                year: "2023",
                image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              
              },
              {
                title: "The Prank Panel",
                year: "2023",
                image: "A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
              },
              {
                title: "The Idol",
                year: "2023",
                image: "vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              },
              {
                title: "The Gryphon",
                year: "2023",
                image: "kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              }
            ].map((movie, index) => (

              <div key={index} className="group cursor-pointer">

                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                  alt={movie.title}
                  className="w-full aspect -[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year} <span className="text-red-500">•</span> 104m
                </p>

              </div>

            ))}

          </div>
        </section>

      </main>


    )
}
export default Main
