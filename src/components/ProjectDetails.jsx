import React from "react";
import { useParams } from "react-router-dom";
import leftArrow from "../assets/arrow-right.png";
import share from "../assets/share (1).png";
import dot from "../assets/dot.png";
import github from "../assets/github.png";

const projectData = {
  online_cliipboard: {
    title: "Online Cliipboard",
    desc: "Online Cliipboard is a full-stack web application that enables users to upload any type of file — images, ZIP archives, PDFs, videos, documents, and more.",
    desc2:
      "Nike Reimagined is a creative redesign project focused on delivering a refined, high-performance web experience inspired by Nike’s global brand identity. It highlights a clean, minimal UI with smooth transitions, responsive layouts, and optimized performance across devices. The project demonstrates a balance of aesthetics and functionality for a real-world eCommerce feel.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "Lucide React Icons",
      "React Toastify",
      "Node.js",
      "Express.js",
      "Multer",
      "CORS",
    ],
    features: [
      "Supports upload of any file type like images, PDFs, ZIPs, videos, and documents.",
      "Generates a simple numeric ID for every uploaded file.",
      "Allows anyone with the ID to retrieve and download the exact file.",
      "Shows real-time upload progress to the user.",
      "Preserves the original file name and extension during download.",
    ],
    challenges: [
      "Setting up CORS so frontend and backend could communicate properly.",
      "Keeping the original file name and extension during file download.",
      "Handling large file uploads without causing memory issues.",
      "Preventing the browser’s default behavior during drag-and-drop.",
      "Avoiding file overwrite when multiple files had the same name.",
    ],
    learnings: [
      "Learned how to connect a React frontend with an Express backend.",
      "Understood the complete file upload and download process.",
      "Learned to use Multer for handling file uploads on the server.",
      "Improved React state management using useState and useRef.",
      "Gained experience in designing responsive UI with Tailwind CSS.",
    ],
    links: "https://onlinecliipboard.web.app",
    github: "https://github.com/SathasivamB/onlineclipboard",
  },
  portfolio: {
    title: "Protfolio | Sathasivam B",
    desc: "A dynamic portfolio showcasing my projects, skills, and contributions using the latest web technologies.",
    desc2:
      "My personal portfolio is built to highlight my journey as a developer. It integrates advanced features like profile views tracking, a love count mechanism, and server-side actions for seamless interactivity and performance.",
    tech: [
      "React.js",
      "Custom CSS",
      "Font Awesome",
      "React Router",
      "Firebase",
      "Github",
    ],
    features: [
      "Responsive design that works on mobile, tablet, and desktop.",
      "Sections for About, Projects, Skills, and Contact.",
      "Project showcase with descriptions, images, and links.",
      "Smooth navigation with scrolling and interactive UI elements.",
      "Contact form or social links for easy communication.",
    ],
    challenges: [
      "Making the website fully responsive across different screen sizes.",
      "Organizing content clearly without making the UI cluttered.",
      "Optimizing images and assets for fast loading.",
      "Ensuring smooth navigation and user experience.",
      "Deploying the website and handling hosting issues."
    ],
    learnings: [
      "Improved frontend development skills using React.js and CSS.",
      "Learned how to design clean and user-friendly UI/UX.",
      "Gained experience in making responsive layouts.",
      "Understood how to deploy websites (Firebase).",
      "Learned how to structure and present projects professionally."
    ],
    links: "https://satha-portfolio.web.app/",
    github: "https://github.com/SathasivamB/Portfolio",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h1>Project not found</h1>;

  return (
    <div className="section">
      <div className="content">
        <a href="/projects">
          <p className="p">
            <img src={leftArrow} alt="" className="leftarrow arrow" /> Back to
            projects
          </p>
        </a>
        <h1 className="h1">{project.title}</h1>
        <p className="p">{project.desc}</p>

        <h2>Tech Stack</h2>
        <div className="languages">
          {project.tech.map((t, i) => (
            <div className="tech-stack">
              <span key={i}>{t}</span>
            </div>
          ))}
        </div>

        <div className="project-features">
          <div className="project-boxs">
            <h2>Features</h2>
            <ul>
              {project.features.map((f, i) => (
                <div className="">
                  <p className="features" key={i}>
                    <img src={dot} alt="" /> {f}
                  </p>
                </div>
              ))}
            </ul>
          </div>

          <div className="project-boxs">
            <h2>Challenges</h2>
            <ul>
              {project.challenges.map((f, i) => (
                <p className="features" key={i}>
                  <img src={dot} alt="" /> {f}
                </p>
              ))}
            </ul>
          </div>

          <div className="project-boxs">
            <h2>Learnings</h2>
            <ul>
              {project.learnings.map((f, i) => (
                <p className="features" key={i}>
                  <img src={dot} alt="" /> {f}
                </p>
              ))}
            </ul>
          </div>

          <div className="project-boxs">
            <h2>Links</h2>
            <div
              className="project-buttons"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a href={project.links}>
                <button className="link">
                  Link <img src={share} alt="" />
                </button>
              </a>

              <a href={project.github}>
                <button className="link">
                  <img src={github} alt="" /> Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
