import { useState } from "react";
import { useGetSearchResultQuery } from "../redux/saavn";
import { useNavigate, useParams } from "react-router-dom";
import {BsSearch} from "react-icons/bs"
import AlbumCard from "../components/AlbumCard";
import SongCard from "../components/SongCard";

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
    <div className="py-5">
      <div className="searchBox flex items-center justify-center mb-10">
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex gap-5 items-center"
        >
          <input
            type="text"
            placeholder="Search for a song..."
            onChange={(e) => setInput(e.target.value)}
            className="border-2 outline-none px-5 py-1 rounded-lg text-lg"
          />
          <button onClick={handleSubmit}>
            <BsSearch size={30}/>
          </button>
        </form>
      </div>
      <div>
        {searchTerm !== undefined && (
          <div className="resultWrapper flex gap-5 flex-wrap lg:ml-5">
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
