import React, { useState } from 'react';
import { Printer, Sun, Moon, MapPin, Calendar, Briefcase, ExternalLink } from "lucide-react";

interface LinkData {
  url: string;
  label: string;
}

interface DescriptionItem {
  text: string;
  link?: LinkData;
  suffix?: string;
}

interface ResumeItem {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  description: DescriptionItem[];
  logo: string;
}

const calculateDuration = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years > 0 ? `${years}y` : ""}${remainingMonths > 0 ? ` ${remainingMonths}m` : ""}`.trim();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  return date.toLocaleDateString(undefined, options);
};

const resumeData: ResumeItem[] = [
  {
    title: "Incoming Software Engineer",
    institution: "Trinity Life Sciences",
    startDate: "2024-12-31",
    endDate: "Present",
    location: "Waltham, Massachusetts, United States",
    description: [
      { text: "New Product Development & Product Management" },
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4JG_4U-X68TQouUUdS0EnZ56KOs0Ttubmw&s"
  },
  {
    title: "Generative AI Intern",
    institution: "Trinity Life Sciences",
    startDate: "2024-06-17",
    endDate: "2024-08-16",
    location: "Waltham, Massachusetts, United States",
    description: [
      { text: "Architected a production-ready evaluation system for a biopharma-focused Agentic RAG platform, leveraging LlamaIndex and Litestar to build performant endpoints on a python-based microservice" },
      { text: "Boosted hybrid search relevance by 50%, improving LLM understanding of domain-specific terminology, and seamlessly integrated AWS Bedrock into existing AI workflows" },
      { text: "First Generative AI intern hire at the company - shipped three main features during the span of the internship" },
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4JG_4U-X68TQouUUdS0EnZ56KOs0Ttubmw&s"
  },
  {
    title: "Machine Learning Researcher at UMass BioNLP Lab",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    startDate: "2024-02-01",
    endDate: "Present",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Conducted research in retrieval-augmented generation (RAG), agentic design patterns, test-time compute (TTC), and large language model (LLM) evaluation incorporating human-in-the-loop methodologies" },
      {
        text: "Co-authored a research paper presenting MedQA-CS, a novel AI-SCE framework ",
        link: { url: "https://arxiv.org/abs/2410.01553", label: "arXiv" },
        suffix: ", with ongoing work in designing scalable Agentic RAG systems to enhance reasoning on medical benchmarks of varying difficulties by identifying the compute-optimal settings for scaling"
      },
      { text: "Applied knowledge distillation to develop judge models (e.g. Qwen 2.5, Llama 3.1) via QLoRA fine-tuning for accurate evaluation of QA, diagnosis, and physical exams sections in medical education" },
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j2PEB7eZobu8CQDtamWBP6EOYq4eYlcnsg&s"
  },
  {
    title: "Undergraduate Course Assistant",
    institution: "Manning College of Information and Computer Sciences, UMass Amherst",
    startDate: "2023-02-01",
    endDate: "2023-12-31",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Supported course delivery by grading assignments while assisting professors with course material preparation" },
      { text: "Provided guidance to students in courses: CS 389 (Introduction to Machine Learning) and CS 383 (Artificial Intelligence)" }
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5j2PEB7eZobu8CQDtamWBP6EOYq4eYlcnsg&s"
  },
  {
    title: "Machine Learning Intern",
    institution: "AI Camp Inc.",
    startDate: "2023-05-30",
    endDate: "2023-08-11",
    location: "Palo Alto, California, United States",
    description: [
      { text: "Engineered a proof-of-concept document chatbot using Langchain, Chroma vector database, and NeMo-Guardrails, supporting multiple file uploads as context" },
      { text: "Led machine learning initiatives within the project team, focusing on optimizing chunking strategy and integrating external tools such as web search via SerpApi for more versatility" },
      { text: "Mentored 10+ high school students in building machine learning applications from scratch using Python, React, and Django" },
    ],
    logo: "https://static.wixstatic.com/media/12b467_a4ceef0f338c41c7885cb083ea36a00f~mv2_d_1742_1743_s_2.png"
  },
  {
    title: "Vice President",
    institution: "UMass Machine Learning Club",
    startDate: "2021-05-01",
    endDate: "2023-07-31",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Organized events, workshops, and projects to foster a community of ML enthusiasts at UMass" },
    ],
    logo: "https://media.licdn.com/dms/image/D4E0BAQGY-dCM5rgv_Q/company-logo_200_200/0/1694113233439?e=2147483647&v=beta&t=JX5W67J40E_fwVD4Zs7aqiGi-Lo10rV4rDDi3HpjlLQ"
  },
  {
    title: "Undergraduate Research Assistant",
    institution: "University of Massachusetts Amherst",
    startDate: "2021-09-01",
    endDate: "2022-01-31",
    location: "Amherst, Massachusetts, United States",
    description: [
      { text: "Conducted research on graph neural networks with the Zhou Lin Quantum Chemistry group" },
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/UMass_Seal_Medium_PMS_202.png"
  }
];

const sortedResumeData = [...resumeData].sort((a, b) => {
  if (a.endDate === "Present" && b.endDate !== "Present") return -1;
  if (a.endDate !== "Present" && b.endDate === "Present") return 1;
  if (a.endDate === b.endDate) {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  }
  return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
});

const Resume: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-5xl mx-auto p-6 sm:p-8 pt-16">
        <header className="mb-8 sticky top-20 z-10">
          <div className={`flex justify-between items-center mb-6 p-4 rounded-xl ${
            darkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-gray-50/80 backdrop-blur-sm'
          }`}>
            <h1 className={`text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Professional Experience
            </h1>
            <div className="flex gap-3">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                    : 'bg-white hover:bg-gray-100 text-gray-600 shadow-sm'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={handlePrint}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                    : 'bg-white hover:bg-gray-100 text-gray-600 shadow-sm'
                }`}
                aria-label="Print resume"
              >
                <Printer size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {sortedResumeData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-colors duration-200 ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {item.logo && (
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-lg overflow-hidden ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <img 
                        src={item.logo} 
                        alt={`${item.institution} logo`} 
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-grow space-y-4">
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {calculateDuration(item.startDate, item.endDate)}
                      </span>
                    </div>
                    <div className="mt-1">
                      <h3 className={`text-lg ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {item.institution}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className={`flex items-center gap-1 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <Calendar size={16} />
                      <span>
                        {formatDate(item.startDate)} - {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                      </span>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {item.description && (
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex gap-2">
                          <Briefcase size={18} className="flex-shrink-0 mt-1" />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {desc.text}
                            {desc.link && (
                              <>
                                <a
                                  href={desc.link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1 ml-1 ${
                                    darkMode ? 'text-blue-400' : 'text-blue-600'
                                  } hover:underline`}
                                >
                                  {desc.link.label}
                                  <ExternalLink size={14} />
                                </a>
                              </>
                            )}
                            {desc.suffix}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;