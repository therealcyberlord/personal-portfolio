import { Code, Database, Cloud } from 'lucide-react';
import Profile from "../components/Profile";

const Home = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 mb-4" />,
      skills: ["Python", "JavaScript", "C/C++", "Java"]
    },
    {
      title: "AI/ML",
      icon: <Database className="w-6 h-6 mb-4" />,
      skills: ["PyTorch", "TensorFlow", "VLLM", "Langchain"]
    },
    {
      title: "Web & Cloud",
      icon: <Cloud className="w-6 h-6 mb-4" />,
      skills: ["React", "Node.js", "AWS", "FastAPI"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Profile
        name="Xingyu Bian"
        description="I received my Master's degree in Computer Science from UMass Amherst. I am passionate about software engineering, machine learning, and have hands-on experience with AI research in the biomedical domain."
        img_path="https://raw.githubusercontent.com/therealcyberlord/personal-portfolio/master/src/assets/profile.jpg"
        role="Software Engineer, AI Researcher, Lifelong Learner"
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I have experience working with various technologies across multiple domains, including machine learning, data science, software engineering, and cloud computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border border-gray-700">
                <div className="text-center">
                  <div className="flex justify-center text-sky-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-gray-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;