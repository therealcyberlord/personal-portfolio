import React from "react";

interface ProfileProps {
  name: string;
  description: string;
  img_path: string;
  role: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  description,
  img_path,
  role,
}) => {
  return (
    <figure className="md:flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
        src={img_path}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-white ">{description}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">{role}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Profile;
