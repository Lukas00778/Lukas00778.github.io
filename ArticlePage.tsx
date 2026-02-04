
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ContentRenderer from '../components/content-blocks/ContentRenderer';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);
  
  const articleIndex = useMemo(() => {
    return sortedArticles.findIndex(a => a.id === id);
  }, [id, sortedArticles]);

  const article = articleIndex !== -1 ? sortedArticles[articleIndex] : undefined;
  const prevArticle = articleIndex > 0 ? sortedArticles[articleIndex - 1] : null;
  const nextArticle = articleIndex < sortedArticles.length - 1 ? sortedArticles[articleIndex + 1] : null;


  if (!article) {
    return (
      <div className="text-center py-20 bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <p className="mt-4 text-gray-600">The article you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 -mt-16 sm:-mt-20">
        <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">{article.category}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2 drop-shadow-md">{article.title}</h1>
        </div>
      </div>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>By {article.author}</span>
        <span className="mx-2">•</span>
        <span>{article.date}</span>
      </div>

      <ContentRenderer content={article.content} />

      <nav className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
        {nextArticle ? (
            <Link to={`/article/${nextArticle.id}`} className="text-left group w-full sm:w-1/2">
                <p className="text-sm text-gray-500">Previous Article</p>
                <p className="mt-1 text-blue-600 font-semibold group-hover:underline">{nextArticle.title}</p>
            </Link>
        ) : <div className="w-full sm:w-1/2" />}
        {prevArticle ? (
            <Link to={`/article/${prevArticle.id}`} className="text-left sm:text-right group w-full sm:w-1/2">
                <p className="text-sm text-gray-500">Next Article</p>
                <p className="mt-1 text-blue-600 font-semibold group-hover:underline">{prevArticle.title}</p>
            </Link>
        ) : <div className="w-full sm:w-1/2" />}
      </nav>
      
      <div className="mt-12 text-center">
        <Link to="/" className="inline-block bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
            &larr; Back to all articles
        </Link>
      </div>
    </article>
  );
};

export default ArticlePage;
