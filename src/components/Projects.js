import React from "react";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css/pagination";

const projects = [
  {
    title: "PPLACD | 2023",
    description: 
            "PPLACD is a platform designed for professionals, enhancing communication between students, coaches, and employers. It ensures seamless flow of job-ready students. The platform improves recruitment experience.",
        link: "https://pplacd-web-green.vercel.app/",
    image: "/pplacd.png",
  },
  {
    title: "SiriPay | 2023",
    description:
      "SIRIPAY is a digital payment platform that simplifies transactions, offering users a secure and smooth experience. With a simple design and robust security features, it ensures trust and convenience for online payments.",
    link: "https://www.siripay.co/",
    image: "/siripay.png",
  },
  {
    title: "Girnarsoft | 2024",
    description:
      "Girnarsoft’s website offers a modern design with intuitive navigation and responsive layouts. It utilizes the latest web technologies and UI/UX best practices to deliver an optimized user experience across all devices.",
    link: "https://girnarsoft-web.vercel.app/",
    image: "/girnarsoft.png",
  },
  {
    title: "Quantmhill | 2024",
    description:
      "Quantmhill’s website highlights its IT services and solutions with a modern, user-centric design. The platform provides smooth navigation and an engaging experience, ensuring easy access to the company’s offerings.",
    link: "https://www.quantmhill.com/",
    image: "/quantmhill.png",
  },
  {
    title: "PGdekho | 2023",
    description:
      "PG Dekho India is a platform for finding paying guest accommodations across cities in India. With an extensive database, it allows users to search and compare PG options based on their personal preferences.",
    link: "https://pgdekho.com/#/",
    image: "/pgdekho.png",
  },
  {
    title: "Nestohub | 2023",
    description:
      "NESTOHUB is a platform that facilitates buying, selling, and renting properties. Integrating Redux for efficient state management, it provides a seamless user experience and smooth API interactions for property-related tasks.",
    link: "https://nestohub.in/",
    image: "/nestohub.png",
  },
];


const Projects = () => {
  return (
    <section  id="projects" className="py-5" >
      <Container >
        <h2 className="text-center mb-5"
          style={{ color: "black", fontSize: "2.5rem", fontWeight: "bold" }} >Projects</h2>
        <Swiper
          spaceBetween={30} 
          slidesPerView={1}
          loop={true}
         
          pagination={{ clickable: true }} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
          }}
          modules={[Autoplay,  Pagination]} 
          breakpoints={{
            768: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Card className="mb-3 shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ maxHeight: "19rem" ,height:"13rem",border:"1px solid grey"}}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.link} target="_blank">
                    View Project
                  </Card.Link>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Projects;
