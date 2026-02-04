
import React from 'react';
import { BoardMember } from '../types';

interface BoardMemberCardProps {
  member: BoardMember;
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={member.imageUrl} 
        alt={member.name} 
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-800 tracking-tight">{member.name}</h3>
      <p className="mt-1 text-blue-600 font-semibold">{member.role}</p>
    </div>
  );
};

export default BoardMemberCard;
