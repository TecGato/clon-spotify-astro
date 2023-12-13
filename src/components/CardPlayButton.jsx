import { Pause, Play } from './Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id,
      },
    });

    setIsPlaying(!isPlaying);
  };

  const isPlayingPlayMusic = isPlaying && currentMusic?.playlist.id === id;

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-4"
      onClick={handleClick}
    >
      {isPlayingPlayMusic ? <Pause /> : <Play />}
    </button>
  );
}
