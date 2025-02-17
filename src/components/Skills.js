import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGit,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiChartdotjs,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { PiDesktopTowerFill } from "react-icons/pi";
import "../../src/Skills.css";

const Skills = () => {
  const skills = {
    "Frontend Technologies": [
      {
        name: "React.js",
        icon: <FaReact size={40} />,
        link: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={40} />,
        link: "https://nextjs.org/",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 size={40} />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt size={40} />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "SASS/SCSS",
        icon: <FaSass size={40} />,
        link: "https://sass-lang.com/",
      },
      {
        name: "Material-UI",
        icon: <SiMui size={40} />,
        link: "https://mui.com/",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={40} />,
        link: "https://getbootstrap.com/",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={40} />,
        link: "https://tailwindcss.com/",
      },
      {
        name: "Redux",
        icon: <SiRedux size={40} />,
        link: "https://redux.js.org/",
      },
      {
        name: "React Router",
        icon: <FaReact size={40} />,
        link: "https://reactrouter.com/",
      },
    ],
    Languages: [
      {
        name: "JavaScript (ES6+)",
        icon: <IoLogoJavascript size={40} />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={40} />,
        link: "https://www.typescriptlang.org/",
      },
    ],
    "Libraries & Frameworks": [
      {
        name: "Chart.js",
        icon: <SiChartdotjs width={40} />,
        link: "https://www.chartjs.org/",
      },
      {
        name: "Axios",
        icon: <SiAxios size={40} />,
        link: "https://axios-http.com/",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={40} />,
        link: "https://expressjs.com/",
      },
    ],
    "Development Tools": [
      { name: "Git", icon: <FaGit size={40} />, link: "https://git-scm.com/" },
      {
        name: "GitHub",
        icon: <FaGithub size={40} />,
        link: "https://github.com/",
      },
    ],
    "Other Skills": [
      {
        name: "Responsive Design",
        icon: (
          <PiDesktopTowerFill
            width={60}
            style={{ height: "2rem", width: "5rem" }}
          />
        ),
        link: "",
      },
      //   { name: "State Management", icon: <img src="/state-management-icon.svg" alt="State Management" width={40} />, link: "" },
      //   { name: "Component-Based Architecture", icon: <img src="/component-icon.svg" alt="Component Architecture" width={40} />, link: "" },
      {
        name: "Cross-Browser Compatibility",
        icon: (
          <img src="/cross-browser-icon.png" alt="Cross Browser" width={40} />
        ),
        link: "",
      },
      {
        name: "API Integration",
        icon: <img src="/api-icon.png" alt="API Integration" width={40} />,
        link: "",
      },
      {
        name: "Performance Optimization",
        icon: (
          <img
            src="/performance-icon.webp"
            alt="Performance Optimization"
            width={40}
          />
        ),
        link: "",
      },
    ],
  };

  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "black" }}
    >
      <Container data-aos="fade-up"
     
     >
        <h2
          className="text-center mb-5"
          style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Skills
        </h2>
        <Row>
          <Col sm={6} id="skill-container">
            {Object.keys(skills).map((category) => (
              <Col sm={12} key={category} style={{color:"white"}}>
                <h3
                  className="text-start mb-3"
                  style={{ fontSize: "1.75rem", fontWeight: "600" }}
                >
                  {category}
                </h3>
                <div className="d-flex flex-wrap justify-content-start">
                  {skills[category].map((skill, index) => (
                    <Card
                      key={index}
                      className="shadow-sm m-2 hover-effect text-center"
                      style={{
                        width: "180px",
                        height: "120px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardBody>
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block mb-2"
                        >
                          {skill.icon}
                        </a>
                        <CardTitle tag="h5" className="font-weight-bold">
                          {skill.name}
                        </CardTitle>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Col>
            ))}
          </Col>
         <Col sm={6} className="d-flex align-items-center  p-4">
  <div>
    <h3 className="text-start mb-3" style={{ fontSize: '1.75rem', fontWeight: '600',color:"white" }}>
      About My Technical Skills
    </h3>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
      I have hands-on experience in front-end and full-stack development using modern JavaScript frameworks like 
      <strong> React.js</strong> and <strong>Next.js</strong>. I am skilled in UI libraries such as <strong>Material-UI</strong> 
      and <strong>Bootstrap</strong>, ensuring responsive and user-friendly interfaces.  
    </p>
    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
      My expertise extends to state management with <strong>Redux</strong> and API integration using <strong>Axios</strong>. 
      I am proficient in TypeScript, ensuring scalable and maintainable applications. Additionally, I work with Git and GitHub for 
      version control and team collaboration.
    </p>
  </div>
</Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
