import Image from 'next/image';
import ReactPlayer from 'react-player';

const mediaItems = [
  { type: 'video', src: '/video.mp4' },
  { type: 'image', src: '/public/logo3.png' },
  { type: 'image', src: '/public/foto1.jpg' },
  { type: 'image', src: '/public/foto2.jpg.jpg' },
  { type: 'video', src: '/video2.mp4' },
];

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {mediaItems.map((item, index) => (
        <div key={index} className="relative w-full h-64 bg-black rounded-lg overflow-hidden">
          {item.type === 'image' ? (
            <Image src={item.src} alt="Media" layout="fill" objectFit="cover" />
          ) : (
            <ReactPlayer url={item.src} width="100%" height="100%" controls />
          )}
        </div>
      ))}
    </div>
  );
}