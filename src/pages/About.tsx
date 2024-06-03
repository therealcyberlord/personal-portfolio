const About = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Connect with me on LinkedIn and explore my coding portfolios 💻
        </h1>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/xingyu-bian-1734bb134/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="LinkedIn" className="w-12 h-12 md:w-14 md:h-14" />

           
          </a>
          <a
            href="https://github.com/therealcyberlord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" className="w-12 h-12 md:w-14 md:h-14" />
            
          </a>
          <a
            href="https://www.kaggle.com/therealcyberlord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <img src="https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" alt="Kaggle" className="w-12 h-12 md:w-14 md:h-14" />
            
          </a>
          <a
            href="https://huggingface.co/therealcyberlord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            <img
              src="https://huggingface.co/front/assets/huggingface_logo.svg"
              alt="Hugging Face"
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
