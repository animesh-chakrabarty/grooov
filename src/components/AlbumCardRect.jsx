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
      <div className="h-[120px] w-[270px] max-xl:h-[120px] max-xl:w-[240px] bg-[#D9C9F2] flex  p-2 rounded-[12px] cursor-pointer text-gray-800 bg-opacity-60 hover:bg-opacity-100 relative group max-xl:ml-3">
        {/*1. Album Cover Image */}
        <img
          src={album?.image[2]?.link}
          alt=""
          className="object-cover h-[100%] w-[45%] rounded-lg"
        />
        {/*2. Song Name & Artist Name + Buttons*/}
        <div className="h-full  w-[55%]">
          {/* Song Name & Artist Name */}
          <div className="w-[100%] text-left mt-2 pl-2">
            <h1 className="truncate text-xl font-[600]">{album?.name}</h1>
            <h3 className="truncate text-[14px]">
              {album?.artists[0]?.name}
            </h3>
          </div>
          {/* Buttons */}
          <div className="items-center justify-center">
            {isPlaying && flag ? (
              <button className="px-2 py-1 text-xl " onClick={handlePause}>
                <BsFillPauseCircleFill size={40} color="white" />
              </button>
            ) : (
              <button className="px-2 py-1 text-xl ">
                <AiFillPlayCircle
                  size={40}
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
        </div>
      </div>
    </div>
  );
};

export default AlbumCardRect;
