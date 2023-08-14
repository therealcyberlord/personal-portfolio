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
        console.log(description[currentIndex]);
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
        className="w-86 h-86 rounded-full mx-auto"
        src={img_path}
        alt="Xingyu's profile picture"
      />
      <figure className="flex">
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="p-5 text-lg font-large text-white ">{typedText}</p>
          </blockquote>
        </div>
      </figure>
      <figcaption className="font-medium text-center my-3">
        <div className=" text-sky-500 dark:text-sky-400 font-sans">{name}</div>
        <div className=" text-sky-500 dark:text-sky-400 font-sans">{role}</div>
      </figcaption>
    </>
  );
};

export default Profile;
