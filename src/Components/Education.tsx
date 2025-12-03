import styled from "styled-components";

// 🔷 Premium Modern Education Section (Glass + Shapes)

const EducationSection = styled.section`
  background: var(--first-color);
  padding: 6rem 2rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: var(--sixth-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  font-family: var(--primary-font);
  letter-spacing: 1px;
`;

const EducationCard = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  border-radius: 1.5rem;

  /* Glassmorphism */
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);

  margin-bottom: 2rem;
  transition: 0.35s ease;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.28);

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }
`;

const Degree = styled.h3`
  font-size: 1.8rem;
  font-family: var(--primary-font);
  margin-bottom: 0.7rem;
  color: var(--sixth-color);
`;

const Institution = styled.p`
  font-family: var(--secondary-font);
  font-size: 1.1rem;
  color: var(--fifth-color);
  font-weight: bold;
`;

const Duration = styled.p`
  margin-top: 0.5rem;
  font-family: var(--secondary-font);
  color: var(--fourth-color);
  font-weight: 600;
`;

// 🔷 Background Shapes (Do NOT affect the cards)
const ShapeOne = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--fourth-color);
  opacity: 0.25;
  top: 12%;
  left: -4%;
  border-radius: 40px;
  transform: rotate(40deg);
  filter: blur(20px);
`;

const ShapeTwo = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  background: var(--third-color);
  opacity: 0.18;
  bottom: 18%;
  right: -6%;
  border-radius: 50%;
  filter: blur(25px);
`;

const ShapeThree = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  background: var(--fifth-color);
  opacity: 0.15;
  top: 60%;
  left: 35%;
  border-radius: 30px;
  transform: rotate(25deg);
  filter: blur(18px);
`;

const EducationComponent = () => {
  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "Vaigai Arts and Science Women's College, Salem",
      duration: "2020 - 2023",
    },
    {
      degree: "High School",
      institution: "Government Higher Secondary School, Chimbiri",
      duration: "2018 - 2020",
    },
  ];

  return (
    <EducationSection>
      <ShapeOne />
      <ShapeTwo />
      <ShapeThree />

      <Title>Education</Title>

      {education.map((edu, index) => (
        <EducationCard key={index}>
          <Degree>{edu.degree}</Degree>
          <Institution>{edu.institution}</Institution>
          <Duration>{edu.duration}</Duration>
        </EducationCard>
      ))}
    </EducationSection>
  );
};

export default EducationComponent;
