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
  // track current index and typed text
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < description.length) {
        setCurrentIndex(currentIndex + 1);
        setTypedText((prevText) => prevText + description[currentIndex]);
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => {
      clearInterval(timer);
    };
  }, [typedText]);

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-64 h-64 rounded-full mx-auto lg:w-96 lg:h-96"
        src={img_path}
        alt="Xingyu's profile picture"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote className="max-w-4xl mx-auto text-lg lg:text-2xl">
          {/* Limit the width of the description */}
          <p className="p-5 text-white font-serif">{typedText}</p>
        </blockquote>
      </div>
      <figcaption className="font-medium text-center my-3">
        <p className="text-sky-500 dark:text-sky-400 text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-sky-500 dark:text-sky-400 text-xl lg:text-2xl">
          {role}
        </p>
      </figcaption>
    </div>
  );
};

export default Profile;
