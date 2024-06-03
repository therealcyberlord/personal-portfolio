const resumeData = [
  {
    title: "Graduate Researcher at UMass BioNLP Lab",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    dates: "February 2024 - Present",
    location: "Amherst, Massachusetts, United States",
    description: [
      "Develop efficient LLM-based evaluation systems for USMLE patient encounters.",
      "Streamline data pipelines with Pandas for automated file generation and processing.",
      "Design multi-agent systems to simulate a virtual hospital environment."
    ]
  },
  {
    title: "Undergraduate Course Assistant",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    dates: "February 2023 - December 2023 (11 months)",
    location: "Amherst, Massachusetts, United States",
    description: [
      "Handled student grading and assisted the professor with creating new course content.",
      "Courses: CS 389 (Introduction to Machine Learning), CS 383 (Artificial Intelligence)."
    ]
  },
  
  {
    title: "Machine Learning Intern",
    institution: "AI Camp Inc.",
    dates: "May 2023 - August 2023 (4 months)",
    location: "Palo Alto, California, United States",
    description: [
      "Developed a retrieval QA system using Langchain and vector database Chroma, supporting multiple documents as input.",
      "Applied prompt engineering techniques such as chain-of-thought (CoT) to improve accuracy and reduce hallucination.",
      "Mentored 10+ high school students in building ML-powered applications from the ground up."
    ]
  },
  {
    title: "Vice President",
    institution: "UMass Machine Learning Club",
    dates: "May 2021 - July 2023 (2 years 3 months)",
    location: "Amherst, Massachusetts, United States"
  },

  {
    title: "Undergraduate Research Assistant",
    institution: "University of Massachusetts Amherst",
    dates: "September 2021 - January 2022 (5 months)",
    location: "Amherst, Massachusetts, United States",
    description: [
      "Graph neural network research with the Zhou Lin Quantum Chemistry group at UMass."
    ]
  }
];

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Resume</h1>
        {resumeData.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
            <h3 className="text-xl text-gray-600">{item.institution}</h3>
            <p className="text-sm text-gray-500">{item.dates} - {item.location}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {item.description?.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
