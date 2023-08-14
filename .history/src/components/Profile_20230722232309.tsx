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
        className="w-48 h-48 rounded-full mx-auto"
        src={img_path}
        alt="Xingyu's profile picture"
        width="384"
        height="512"
      />
      <figure className="md:flex">
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-white" style={{ fontSize: "12px" }}>
              {description}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 font-serif hover:font-sans">
              {name}
            </div>
            <div className="text-slate-700 dark:text-slate-500">{role}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Profile;
