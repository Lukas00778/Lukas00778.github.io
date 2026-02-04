
import React from 'react';
import { boardMembers } from '../data/board';
import BoardMemberCard from '../components/BoardMemberCard';

const BoardPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Executive Board</h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">The dedicated leadership behind the Flying Hoppers.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {boardMembers.map(member => (
          <BoardMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
