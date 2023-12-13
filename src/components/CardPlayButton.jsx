import { Pause, Play } from './Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore();

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id,
      },
    });
  };

  const isPlayingPlayMusic = isPlaying && currentMusic?.id === id;

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-4"
      onClick={handleClick}
    >
      {isPlayingPlayMusic ? <Pause /> : <Play />}
    </button>
  );
}
