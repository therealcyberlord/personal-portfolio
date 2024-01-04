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
    const typingSpeed = 50; // Adjust typing speed here (milliseconds per character)
    const descriptionLength = description.length;

    const typingEffect = setTimeout(() => {
      if (currentIndex < descriptionLength) {
        setTypedText((prevText) => prevText + description[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [currentIndex, description]);

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-64 h-64 rounded-full mx-auto lg:w-96 lg:h-96"
        src={img_path}
        alt="Xingyu's profile picture"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote className="max-w-4xl mx-auto text-lg lg:text-2xl">
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
