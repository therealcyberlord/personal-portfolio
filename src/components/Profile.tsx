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
    <div className="flex flex-col items-center bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <img
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full mx-auto shadow-lg"
        src={img_path}
        alt="Profile picture"
      />
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{name}</h2>
        <h3 className="text-xl text-sky-500 dark:text-sky-400 sm:text-2xl md:text-3xl mt-2">
          {role}
        </h3>
      </div>
      <div className="mt-6 max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-light leading-relaxed">
        <p>{typedText}</p>
      </div>
    </div>
  );
};

export default Profile;
