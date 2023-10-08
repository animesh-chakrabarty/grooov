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
  console.log(data?.length - 1);

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
    dispatch(nextSong(data?.length));
  };

  return (
    <div>
      {/* Mobile Audio Player */}
      <div className="md:hidden absolute bottom-[62px] w-full px-5 py-1 flex justify-center ">
        <div className="py-1 rounded-lg px-2 flex justify-between items-center w-[90%] bg-[#D9C9F2]">
          <h2 className="w-1/2 truncate">{data[currentSongIndex]?.name}</h2>
          <div className="flex gap-1">
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
      </div>
      {/* Desktop Audio Player */}
      <div className="max-md:hidden mt-[70%]">
        <div className="bg-[#D9C9F2] flex flex-col">
          <h2 className="text-xl font-bold">{data[currentSongIndex]?.name}</h2>
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
          url={data[currentSongIndex]?.downloadUrl[4]?.link}
          playing={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
