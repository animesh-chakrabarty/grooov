import { useState } from "react";
import { useGetSearchResultQuery } from "../redux/saavn";
import { useNavigate, useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import AlbumCard from "../components/AlbumCard";
import SongCard from "../components/SongCard";
import { ImGithub } from "react-icons/im";
import logo2 from "../assets/groov_icon_2.png";

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { searchTerm } = useParams();

  console.log("x" + searchTerm);
  let { data: searchResult } = useGetSearchResultQuery(searchTerm);
  console.log(searchResult);

  const handleSubmit = () => {
    console.log("searched for " + input);
    navigate(`/search/${input}`);
  };

  searchResult = searchResult?.data?.results;
  console.log(searchResult);

  return (
    <div className="">
      {/* Logo for mobile devices */}
      <div className="md:hidden pl-2 pr-5 flex justify-between items-center">
        <img src={logo2} alt="" className="h-[50px] w-[150px]" />
        <button
          onClick={() => {
            window.open(
              "https://github.com/Animesh-Chakrabarty/Project-Music-Player"
            );
          }}
        >
          <ImGithub size={30} />
        </button>
      </div>
      {/* Search Bar */}
      <div className=" flex justify-center items-end mt-3 mb-4 ">
        <form action="" className="flex gap-3 ">
          <input
            type="text"
            placeholder="Search for a song , album ..."
            onChange={(e) => setInput(e.target.value)}
            className="outline-none px-6 py-1"
          />
          <button onClick={handleSubmit} className="">
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      <div>
        {searchTerm !== undefined && (
          <div className="resultWrapper flex gap-3 flex-wrap lg:ml-5">
            {searchResult?.map((song, i) => (
              <SongCard key={song?.id} song={song} i={i} data={searchResult} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
