"use client";

import Image from "next/image";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <h2 className="flex items-center gap-4 mb-4 text-[#253347]">
        <Image src={icon} width={32} height={32} alt="card icon" />
        <span className="font-semibold">{title}</span>
      </h2>
      <p className="text-[#5E6E85]">{description}</p>
    </div>
  );
};

export default Card;
