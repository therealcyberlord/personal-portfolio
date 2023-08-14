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
    <div className="flex flex-col items-center">
      <img
        className="w-64 h-64 rounded-full mx-auto lg:w-96 lg:h-96"
        src={img_path}
        alt="Xingyu's profile picture"
      />
      <div className="pt-6 text-center space-y-4">
        <blockquote className="max-w-4xl mx-auto text-lg lg:text-2xl">
          {/* Limit the width of the description */}
          <p className="p-5 text-white font-serif">{description}</p>
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

      {/* Projects Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
            {/* Project Cards */}
            {/* Replace the dummy data with your actual project data */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover object-center"
                src="project-image-1.jpg"
                alt="Project 1"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Project 1
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Description of Project 1...
                </p>
                <a
                  href="#"
                  className="mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more
                </a>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
