import { Pause, Play } from './Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    if (isPlayingPlayList) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({
          playlist,
          song: songs[0],
          songs,
        });
      });
  };

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-4"
      onClick={handleClick}
    >
      {isPlayingPlayList ? <Pause /> : <Play />}
    </button>
  );
}
