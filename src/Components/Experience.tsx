import styled from "styled-components";

// 🔷 Experience Section
const ExperienceSection = styled.section`
  background-color: var(--first-color);
  color: var(--sixth-color);
  font-family: var(--primary-font);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

// 🔷 Title Box (Bold, Centered, White Text with Background)
const TitleBox = styled.div`
  font-size: 3rem;
  font-weight: 800; /* Bold */
  margin: 0 auto 1rem auto; /* Center horizontally */
  font-family: var(--primary-font);
  letter-spacing: 1px;
  text-align: center;
  color: var(--sixth-color); /* White text */
  padding: 1rem 3rem;
 `;


// 🔷 Description
const Description = styled.p`
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  color: var(--fifth-color); /* Different color for description */
  text-align: center;
  margin-bottom: 3rem;
`;

// 🔷 Experience Cards Container
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
`;

// 🔷 Experience Card
const ExperienceCard = styled.div`
  width: 36rem;
  max-width: 90%;
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(130deg, var(--first-color), var(--second-color));
  color: var(--fourth-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  perspective: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }

  h3,
  p {
    transition: transform 0.4s ease, text-shadow 0.4s ease;
    transform-style: preserve-3d;
  }

  &:hover h3 {
    transform: translateZ(20px);
    text-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    color: var(--fourth-color);
  }

  &:hover p {
    transform: translateZ(10px);
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: var(--fifth-color);
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ffffff; /* White for role & duration */
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Company = styled.h3`
  font-family: var(--primary-font);
  color: var(--third-color);
`;

const Role = styled.p`
  font-family: var(--secondary-font);
  color: #ffffff;
`;

const Duration = styled.p`
  font-family: var(--secondary-font);
  color: #ffffff;
`;

// 🔷 Background Shapes
const ShapeOne = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  background: var(--fourth-color);
  opacity: 0.2;
  top: 10%;
  left: 5%;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
`;

const ShapeTwo = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  background: var(--third-color);
  opacity: 0.15;
  bottom: 15%;
  right: 10%;
  border-radius: 40%;
  filter: blur(100px);
  z-index: 0;
`;

const ShapeThree = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--fifth-color);
  opacity: 0.1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30%;
  filter: blur(90px);
  z-index: 0;
`;

const ExperienceComponent = () => {
  return (
    <ExperienceSection>
      <ShapeOne />
      <ShapeTwo />
      <ShapeThree />

      <TitleBox>Experience</TitleBox>
      <Description>My journey in the tech world</Description>

      <CardsContainer>
        <ExperienceCard>
          <Company>ES EthicSecur SofTec Pvt. Ltd.</Company>
          <Role>MERN Stack Developer</Role>
          <Duration>Jan 2024 - Present</Duration>
        </ExperienceCard>

        <ExperienceCard>
          <Company>ERP Hub Solutions</Company>
          <Role>SAP ABAP Trainee</Role>
          <Duration>Apr 2023 - Jul 2023</Duration>
        </ExperienceCard>
      </CardsContainer>
    </ExperienceSection>
  );
};

export default ExperienceComponent;
