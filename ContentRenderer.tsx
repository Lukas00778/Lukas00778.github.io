
import React from 'react';
import { ContentBlock } from '../../types';
import GalleryBlock from './GalleryBlock';
import YoutubeBlock from './YoutubeBlock';

interface ContentRendererProps {
  content: ContentBlock[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  return (
    <div className="space-y-12">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <div key={index}>
                {block.title && <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">{block.title}</h2>}
                <div
                  className="prose prose-lg max-w-none text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
              </div>
            );
          case 'gallery':
            return <GalleryBlock key={index} block={block} />;
          case 'youtube':
            return <YoutubeBlock key={index} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
