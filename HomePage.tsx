
import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import { sponsors } from '../data/sponsors';
import ArticleCard from '../components/ArticleCard';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const allCategories = articles.map(article => article.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
        const matchesSearch = 
          searchQuery.trim() === '' ||
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, activeCategory]);

  return (
    <div className="space-y-16">

      <section className="relative h-[50vh] rounded-lg overflow-hidden flex items-center justify-center text-center p-8 bg-gray-100 border border-gray-200 shadow-md">
        <img src="https://picsum.photos/1600/900?random=101" alt="Hockey action" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-600 drop-shadow-sm">
            FLYING HOPPERS
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-700 drop-shadow-sm">
            Travel. Compete. Connect. The official home for all club news and tour updates.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-10 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="relative mb-4">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by keyword..."
              className="w-full bg-gray-50 border-2 border-gray-300 rounded-lg py-3 pl-12 pr-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 border-l-4 border-blue-600 pl-4">
          {activeCategory === 'All' && !searchQuery ? 'Latest News' : 'Results'}
        </h2>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">No Articles Found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or selecting a different category.</p>
          </div>
        )}
      </section>

      <section>
         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 border-l-4 border-blue-600 pl-4">
          Our Valued Sponsors
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {sponsors.map(sponsor => (
                    <a key={sponsor.id} href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105">
                        <img 
                            src={sponsor.logoUrl} 
                            alt={`${sponsor.name} logo`}
                            className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            title={sponsor.name}
                        />
                    </a>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
