import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { play, pause, prevSong, nextSong } from "../redux/playerSlice";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPauseCircleFill } from "react-icons/bs";

const AudioPlayer = () => {
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const currentSongIndex = useSelector(
    (state) => state.player.currentSongIndex
  );
  const data = useSelector((state) => state.player.data);
  const dispatch = useDispatch();

  console.log(data);
  console.log(data?.data?.songs.length - 1);

  const handlePlay = () => {
    dispatch(play());
  };

  const handlePause = () => {
    dispatch(pause());
  };

  const handlePrevSong = () => {
    dispatch(prevSong());
  };

  const handleNextSong = () => {
    dispatch(nextSong(data?.data?.songs.length));
  };

  return (
    <div className="mt-[70%]">
      <div className="bg-[#D9C9F2] flex flex-col">
        <h2 className="text-xl font-bold">
          {data?.data?.songs[currentSongIndex]?.name}
        </h2>
        <div className="flex justify-between items-center my-4">
          <button onClick={handlePrevSong} className="outline-none">
            <BiSolidSkipPreviousCircle size={40} color="black" />
          </button>
          {isPlaying ? (
            <button onClick={handlePause} className="outline-none">
              <BsFillPauseCircleFill size={40} color="black" />
            </button>
          ) : (
            <button onClick={handlePlay} className="outline-none">
              <AiFillPlayCircle size={40} color="black" />
            </button>
          )}
          <button onClick={handleNextSong} className="outline-none">
            <BiSolidSkipNextCircle size={40} color="black" />
          </button>
        </div>
      </div>
      <ReactPlayer
        url={data?.data?.songs[currentSongIndex]?.downloadUrl[4]?.link}
        playing={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};

export default AudioPlayer;
