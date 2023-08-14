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
    <div className="flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover object-center"
              src={img_path}
              alt="Project 1"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {name}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {description}
              </p>
              <a
                href={src_path}
                className="mt-3 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
