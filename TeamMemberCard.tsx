
import React from 'react';
import { Player } from '../types';

interface TeamMemberCardProps {
  player: Player;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ player }) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md border border-gray-200 text-center">
      <div className="relative">
        <img src={player.imageUrl} alt={player.name} className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 right-3 bg-blue-600/90 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
          {player.jerseyNumber}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{player.name}</h3>
        <p className="text-sm text-gray-600 uppercase tracking-wide">{player.position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
