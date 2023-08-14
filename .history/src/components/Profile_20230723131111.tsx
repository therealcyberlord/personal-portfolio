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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < description.length) {
        setCurrentIndex(currentIndex + 1);
        setTypedText((prevText) => prevText + description[currentIndex]);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [description, currentIndex]);

  return (
    <>
      <img
        className="w-64 h-64 rounded-full mx-auto"
        src={img_path}
        alt="Xingyu's profile picture"
      />
      <figure className="flex">
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="p-5 text-lg text-white text-xl font-serif">
              {description}
            </p>
          </blockquote>
        </div>
      </figure>
      <figcaption className="font-medium text-center my-3">
        <p className="text-sky-500 dark:text-sky-400 text-xl">{name}</p>
        <p className="text-sky-500 dark:text-sky-400 text-xl">{role}</p>
      </figcaption>
    </>
  );
};

export default Profile;
