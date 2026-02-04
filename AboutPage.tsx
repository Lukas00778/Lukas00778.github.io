
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">About The Flying Hoppers</h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">More than just a team. We are a global family united by hockey.</p>
      </div>
      <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900">
          <h2>Our History</h2>
          <p>
            Founded decades ago, the Flying Hoppers started as a group of friends with a shared passion for hockey and travel. What began as informal tours to neighboring countries quickly grew into an international tradition.
          </p>
          <p>
            Over the years, we've competed in tournaments across Asia, Europe, North America, and beyond. Each trip is not just about the games we play, but about the cultures we experience and the friendships we forge.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to promote the sport of hockey, foster international camaraderie, and create lasting memories for our members. We believe in sportsmanship, respect, and the joy of the game. Whether we win or lose, we do it together as a team.
          </p>
          <h2>Join Us</h2>
          <p>
            Interested in becoming a part of our legacy? We are always looking for passionate players who share our love for hockey and adventure. Get in touch to learn more about upcoming tours and how you can join the Flying Hoppers family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
