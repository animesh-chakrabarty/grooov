import { useState } from "react";
import {
  useGetSongSearchResultQuery,
  useGetAlbumSearchResultQuery,
  useGetArtistSearchResultQuery,
} from "../redux/saavn";
import { useNavigate, useParams } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import AlbumCard from "../components/AlbumCard";
import SongCard from "../components/SongCard";
import { ImGithub } from "react-icons/im";
import logo2 from "../assets/groov_icon_2.png";
import SongsWrapper from "../components/Search/SongsWrapper";
import AlbumsWrapper from "../components/Search/AlbumsWrapper";
import ArtistsWrapper from "../components/Search/ArtistsWrapper";

const Search = () => {
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  const [input, setInput] = useState(searchTerm);

  let { data: songSearchResult } = useGetSongSearchResultQuery(searchTerm);
  let { data: albumSearchResult } = useGetAlbumSearchResultQuery(searchTerm);
  let { data: artistSearchResult } = useGetArtistSearchResultQuery(searchTerm);

  songSearchResult = songSearchResult?.data?.results;
  albumSearchResult = albumSearchResult?.data?.results;
  artistSearchResult = artistSearchResult?.data?.results;

  // console.log(songSearchResult);
  // console.log(albumSearchResult);
  // console.log(artistSearchResult);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("searched for " + input);
    navigate(`/search/${input}`);
  };

  // console.log(searchResult);

  return (
    <div className="h-full w-full">
      <div className="xl:hidden pl-2 pr-4 flex justify-between items-center">
        <img src={logo2} alt="" className="h-[40px] w-[120px]" />
        <button
          onClick={() => {
            window.open(
              "https://github.com/Animesh-Chakrabarty/Project-Music-Player"
            );
          }}
        >
          <ImGithub size={25} />
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
            value={input}
          />
          <button onClick={handleSubmit} className="">
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      {/* Search Wrapper */}
      {searchTerm !== undefined && (
        <div className="flex flex-col  xl:px-7">
          <div>
            <SongsWrapper data={songSearchResult} />
          </div>
          <div>
            <AlbumsWrapper data={albumSearchResult} />
          </div>
          {/* <div>
            <ArtistsWrapper data={artistSearchResult} />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Search;
