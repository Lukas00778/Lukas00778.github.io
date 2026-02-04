
import React from 'react';
import { YoutubeBlock as YoutubeBlockType } from '../../types';

interface YoutubeBlockProps {
  block: YoutubeBlockType;
}

const YoutubeBlock: React.FC<YoutubeBlockProps> = ({ block }) => {
  return (
    <div>
      {block.title && <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">{block.title}</h2>}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${block.videoId}`}
          title={block.title || 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeBlock;
