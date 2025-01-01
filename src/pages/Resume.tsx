import { Printer } from "lucide-react";

const calculateDuration = (start: string, end: string): string => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : ""}${remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}` : ""}`.trim();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
};

const resumeData = [
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

// Sorting function
const sortedResumeData = [...resumeData].sort((a, b) => {
  if (a.endDate === "Present" && b.endDate !== "Present") return -1;
  if (a.endDate !== "Present" && b.endDate === "Present") return 1;
  if (a.endDate === b.endDate) {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  }
  return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
});

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-end mb-4">
          <button
            onClick={handlePrint}
            className="text-gray-600 hover:text-gray-800 flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md transition-all duration-300"
          >
            <Printer size={20} />
            <span>Print</span>
          </button>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Resume</h1>
        {sortedResumeData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-col md:flex-row items-center md:items-start">
            {item.logo && (
              <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
              <h3 className="text-xl text-gray-600">{item.institution}</h3>
              <p className="text-sm text-gray-500">
                {formatDate(item.startDate)} - {item.endDate === "Present" ? "Present" : formatDate(item.endDate)}
                {calculateDuration(item.startDate, item.endDate) && !calculateDuration(item.startDate, item.endDate).startsWith("0")
                  ? ` (${calculateDuration(item.startDate, item.endDate)})`
                  : ""}
                - {item.location}
              </p>

              {item.description && (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {item.description.map((desc, i) => (
                    <li key={i}>
                      {desc.text}
                      {desc.link && (
                        <a
                          href={desc.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          {desc.link.label}
                        </a>
                      )}
                      {desc.suffix}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
