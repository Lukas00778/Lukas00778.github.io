
import React from 'react';
import { teamMembers } from '../data/team';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Meet The Team</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">The heart and soul of the Flying Hoppers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map(player => (
          <TeamMemberCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
