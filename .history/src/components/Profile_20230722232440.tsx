import React, { useState, useEffect } from "react";

interface ProfileProps {
  name: string;
  description: string;
  img_path: string;
  role: string;
}

const Profile: React.FC<ProfileProps> = ({
  name = "",
  description = "",
  img_path,
  role = "",
}) => {
  const [typedDescription, setTypedDescription] = useState("");
  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < description.length) {
        setTypedDescription((prevText) => prevText + description[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [description]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < name.length) {
        setTypedName((prevText) => prevText + name[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [name]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < role.length) {
        setTypedRole((prevText) => prevText + role[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [role]);

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
            <p className="text-lg font-sm text-white ">{typedDescription}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 font-sans">
              {typedName}
            </div>
            <div className="text-sky-500 dark:text-sky-400 font-sans">
              {typedRole}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Profile;
