import { useMemo, useState } from "react";

const movies = [
  { id: 1, title: "John Wick", category: "Action" },
  { id: 2, title: "Avengers", category: "Action" },
  { id: 3, title: "Mad Max", category: "Action" },
  { id: 4, title: "The Dark Knight", category: "Action" },
  { id: 5, title: "Gladiator", category: "Action" },

  { id: 6, title: "Hangover", category: "Comedy" },
  { id: 7, title: "Superbad", category: "Comedy" },
  { id: 8, title: "Step Brothers", category: "Comedy" },
  { id: 9, title: "The Mask", category: "Comedy" },
  { id: 10, title: "Dumb and Dumber", category: "Comedy" },

  { id: 11, title: "Interstellar", category: "Sci-Fi" },
  { id: 12, title: "Inception", category: "Sci-Fi" },
  { id: 13, title: "The Matrix", category: "Sci-Fi" },
  { id: 14, title: "Blade Runner 2049", category: "Sci-Fi" },
  { id: 15, title: "Arrival", category: "Sci-Fi" },

  { id: 16, title: "Titanic", category: "Romance" },
  { id: 17, title: "The Notebook", category: "Romance" },
  { id: 18, title: "La La Land", category: "Romance" },
  { id: 19, title: "Pride & Prejudice", category: "Romance" },
  { id: 20, title: "Before Sunrise", category: "Romance" },
];

const UseMemoL = () => {
  const [category, setCategory] = useState("All");

  const sort = useMemo(() => {
    console.log("selected category", {category});

    if (category === "All") return movies;

    return movies.filter((movie) => movie.category === category);
  }, [category]);
  return (
    <div className="w-full h-full p-3  flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold">Category :{category}</h2>

      <div className="flex w-full   my-3 mt-10">
        <button
          className="border px-3 py-2 rounded-xl hover:shadow-lg cursor-pointer"
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className="border px-3 py-2  ml-2 rounded-xl hover:shadow-lg cursor-pointer"
          onClick={() => setCategory("Action")}
        >
          Action
        </button>
        <button
          className="border px-3 py-2  ml-2 rounded-xl hover:shadow-lg cursor-pointer"
          onClick={() => setCategory("Comedy")}
        >
          Comedy
        </button>
        <button
          className="border px-3 py-2  ml-2 rounded-xl hover:shadow-lg cursor-pointer"
          onClick={() => setCategory("Sci-Fi")}
        >
          Sci-Fi
        </button>
      </div>

      <div className="w-full h-full grid grid-cols-3 gap-4 ">
        {sort.map((movie) => (
          <div className="border w-full my-2 p-3 rounded-xl hover:shadow-lg cursor-pointer" key={movie.id}>
            Movie: {movie.title} 
            <p className="my-2">Category: {movie.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseMemoL;
