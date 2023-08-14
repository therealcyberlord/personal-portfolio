import React from "react";

interface SkillItemProps {
  icon: JSX.Element;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl text-color">{icon}</div>
      <p className="text-white text-lg mt-2">{name}</p>
    </div>
  );
};

export default SkillItem;
