
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types';

const ToursPage: React.FC = () => {
  const continents: Article['category'][] = ['Europe', 'Asia', 'Oceania', 'North America', 'South America', 'Africa'];
  const [activeContinent, setActiveContinent] = useState('');
  
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toursByContinent = useMemo(() => {
    const tourArticles = articles.filter(a => continents.includes(a.category));

    return continents.map(continent => ({
      continent,
      tours: tourArticles
        .filter(tour => tour.category === continent)
        .sort((a, b) => new Date(b.date).getFullYear() - new Date(a.date).getFullYear())
    })).filter(group => group.tours.length > 0);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveContinent(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -75% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [toursByContinent]);


  const scrollToContinent = (continent: string) => {
    sectionRefs.current[continent]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
     history.pushState(null, '', `#${continent}`);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Tour Archive</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">A journey through the history of the Flying Hoppers' global adventures.</p>
      </div>

      <nav className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm py-4 mb-12 rounded-lg shadow-md border border-gray-200">
        <div className="container mx-auto flex justify-center flex-wrap gap-x-3 gap-y-2 px-4">
          {toursByContinent.map(({ continent }) => (
            <button
              key={continent}
              onClick={() => scrollToContinent(continent.toLowerCase())}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                activeContinent === continent.toLowerCase()
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {continent}
            </button>
          ))}
        </div>
      </nav>

      <div className="space-y-16">
        {toursByContinent.map(({ continent, tours }) => (
          <section 
            key={continent} 
            id={continent.toLowerCase()}
            ref={el => { sectionRefs.current[continent.toLowerCase()] = el; }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 border-l-4 border-blue-600 pl-4">
              {continent}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tours.map(tour => (
                <ArticleCard key={tour.id} article={tour} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
