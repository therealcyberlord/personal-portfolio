import React from "react";

interface ProfileProps {
  name: string;
  description: string;
  img_path: string;
  src_path: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  description,
  img_path,
  src_path,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden w-80 mx-4 transition transform hover:scale-105">
      <img
        className="w-full h-48 object-cover object-center"
        src={img_path}
        alt="Project 1"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 overflow-hidden">
            {description}
          </p>
        </div>
        <a
          href={src_path}
          className="mt-3 text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Profile;
