const resumeData = [
  {
    title: "AI Software Engineer Intern",
    institution: "Trinity Life Sciences",
    dates: "June 2024 - Aug 2024",
    location: "Greater Boston, Massachusetts, United States",
    description: [
      "Product development team, working on cutting-edge Generative AI features applied to life sciences",
      "First-ever such hire at the company"
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4JG_4U-X68TQouUUdS0EnZ56KOs0Ttubmw&s"
  },
  {
    title: "Graduate Research Assistant at UMass BioNLP Lab",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    dates: "February 2024 - Present",
    location: "Amherst, Massachusetts, United States",
    description: [
      `Developed robust evaluation systems for the USMLE information gathering section using the LLM-as-a-judge framework`,
      `Benchmarked both open-source and proprietary LLMs (GPT, Claude, Llama, Qwen) on tasks such as "LLM-as-medical-student" and "LLM-as-clinical-skills-examiner," while keeping human experts in the loop`,
      `Co-authored a research paper introducing a comprehensive benchmark for clinical skills evaluation, (https://arxiv.org/abs/2410.01553), with ongoing research applying knowledge graphs and other advanced retrieval methods to improve clinical reasoning`
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j2PEB7eZobu8CQDtamWBP6EOYq4eYlcnsg&s"
  },
  {
    title: "Undergraduate Course Assistant",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    dates: "February 2023 - December 2023 (11 months)",
    location: "Amherst, Massachusetts, United States",
    description: [
      "Handled student grading and assisted the professor with creating new course content",
      "Courses: CS 389 (Introduction to Machine Learning), CS 383 (Artificial Intelligence)"
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j2PEB7eZobu8CQDtamWBP6EOYq4eYlcnsg&s"
  },
  
  {
    title: "Machine Learning Intern",
    institution: "AI Camp Inc.",
    dates: "May 2023 - August 2023 (4 months)",
    location: "Palo Alto, California, United States",
    description: [
      "Engineered a question-answering chatbot using Langchain and Chroma vector database, enabling support for multiple file uploads",
      "Led machine learning initiatives within the project team, focusing on optimizing RAG workflows and integrating external tools such as web search via SerpApi for more versatility",
      "Mentored 10+ high school students in building machine learning applications from scratch using Python, React, and Django"
    ],
    logo: "https://static.wixstatic.com/media/12b467_a4ceef0f338c41c7885cb083ea36a00f~mv2_d_1742_1743_s_2.png" 
  },
  {
    title: "Vice President",
    institution: "UMass Machine Learning Club",
    dates: "May 2021 - July 2023 (2 years 3 months)",
    location: "Amherst, Massachusetts, United States",
    logo: "https://media.licdn.com/dms/image/D4E0BAQGY-dCM5rgv_Q/company-logo_200_200/0/1694113233439?e=2147483647&v=beta&t=JX5W67J40E_fwVD4Zs7aqiGi-Lo10rV4rDDi3HpjlLQ"
  },
  
  {
    title: "Undergraduate Research Assistant",
    institution: "University of Massachusetts Amherst",
    dates: "September 2021 - January 2022 (5 months)",
    location: "Amherst, Massachusetts, United States",
    description: [
      "Graph neural network research with the Zhou Lin Quantum Chemistry group at UMass."
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png"
  }
];


const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Resume</h1>
        {resumeData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row items-center md:items-start">
            {item.logo && (
              <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
              <h3 className="text-xl text-gray-600">{item.institution}</h3>
              <p className="text-sm text-gray-500">{item.dates} - {item.location}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {item.description?.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
