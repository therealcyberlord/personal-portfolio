import react from "react";

interface SkillItemProps {
  icon: JSX.Element;
  name: string;
}
const SkillItem = ({ icon, name }): React.FC<SkillItemProps> => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-white text-lg mt-2">{name}</p>
    </div>
  );
};
