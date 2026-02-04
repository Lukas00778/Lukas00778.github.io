
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="block group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={article.imageUrl} alt={article.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{article.category}</p>
        <h3 className="mt-2 text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-200">{article.title}</h3>
        <p className="mt-3 text-sm text-gray-600">{article.summary}</p>
        <div className="mt-4 flex items-center text-xs text-gray-500">
          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
