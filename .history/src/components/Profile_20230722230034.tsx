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
    <>
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={img_path}
        alt=""
        width="484"
        height="612"
      />
      <figure className="md:flex">
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-white ">{description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">{role}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Profile;
