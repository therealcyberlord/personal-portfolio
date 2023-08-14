import React, { useState, useEffect } from "react";

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
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < description.length) {
        setTypedText((prevText) => prevText + description[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [description]);

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
            <p className="text-lg font-sm text-white ">{typedText}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 font-sans">
              {name}
            </div>
            <div className="text-sky-500 dark:text-sky-400 font-sans">
              {role}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Profile;
