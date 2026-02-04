
import React from 'react';

const JoinPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Join The Flying Hoppers</h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">Become part of a global hockey family and adventure with us.</p>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 space-y-8">
        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900 prose-headings:border-b prose-headings:border-gray-200 prose-headings:pb-4 prose-headings:mb-6">
            <h2>About the Club</h2>
            <div className="space-y-6">
                <p>
                On February 15, 1995, the Flying Hoppers was founded as an independent association by its three founding members: Stefan Leuenberger, Toni Haberthür, and Sacha Overhoff. The association's purpose is to promote international connections for the field hockey section of Grasshopper Club Zurich.
                </p>
                <p>
                A major trip is organized every three years, with shorter trips in the two intervening years. Any individual or legal entity can become a member.
                </p>
            </div>

            <h2 className="!mt-12">Membership & Tours</h2>
            <div className="space-y-6">
                <p>
                Membership costs CHF 50 per year. This gives you access to a global network of hockey enthusiasts and the opportunity to join our unforgettable tours.
                </p>
                <ul>
                    <li><strong>Travel the World:</strong> Participate in tournaments in exciting international destinations.</li>
                    <li><strong>Lifelong Friendships:</strong> Build strong bonds with teammates who share your passion.</li>
                    <li><strong>Competitive Hockey:</strong> Play the sport you love against diverse and skilled teams.</li>
                    <li><strong>Unforgettable Experiences:</strong> Create memories on and off the ice that will last a lifetime.</li>
                </ul>
            </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900">Ready to Join the Adventure?</h3>
            <p className="mt-2 text-gray-700">
            If you would like to participate in one of the trips or require further information, please reach out. We're always looking for new players to join our ranks!
            </p>
            <a 
                href="mailto:stefan.leuenberger@wasabi.ch?subject=Joining the Flying Hoppers"
                className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
            >
                Contact Us to Join
            </a>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
