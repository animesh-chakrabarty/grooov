import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPauseCircleFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { useGetAlbumDetailsQuery } from "../redux/saavn";
import {
  pause,
  play,
  setCurrentSongIndex,
  setData,
} from "../redux/playerSlice";

const AlbumCardRect = ({ data, album }) => {
  //   console.log(data);
  //   console.log(album)
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentPlayingData = useSelector((state) => state.player.data);

  let { data: albumSongs } = useGetAlbumDetailsQuery(album?.id);
  albumSongs = albumSongs?.data?.songs;
  //   console.log(albumSongs);

  const flag =
    JSON.stringify(currentPlayingData) === JSON.stringify(albumSongs);

  const handlePlay = () => {
    console.log(albumSongs);
    dispatch(play());
  };

  const handlePause = () => {
    dispatch(pause());
  };

  return (
    <div>
      <div className="h-[270px] w-[200px] max-md:h-[202px] max-md:w-[150px] bg-[#D9C9F2] flex flex-col p-2 rounded-[12px] cursor-pointer text-gray-800 bg-opacity-60 hover:bg-opacity-100 relative group max-xl:ml-3">
        <img
          src={album?.image[2]?.link}
          alt=""
          className="object-cover h-[200px] w-[200px] rounded-lg"
        />

        <div className="absolute flex items-center justify-center h-[200px] w-[185px] ">
          {isPlaying && flag ? (
            <button
              className="px-2 py-1 text-xl group-hover:flex hidden"
              onClick={handlePause}
            >
              <BsFillPauseCircleFill size={60} color="white" />
            </button>
          ) : (
            <button className="px-2 py-1 text-xl group-hover:flex hidden">
              <AiFillPlayCircle
                size={60}
                color="white"
                onClick={() => {
                  handlePlay();
                  dispatch(setData(albumSongs));
                  dispatch(setCurrentSongIndex(0));
                }}
              />
            </button>
          )}
        </div>

        {/* Song Name & Artist Name */}
        <div className="w-[90%] text-left mt-1 pl-2">
          <h1 className="truncate text-lg font-[600]">{album?.name}</h1>
          <h3 className="truncate text-[14px]">
            {album?.primaryArtists[0]?.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AlbumCardRect;
