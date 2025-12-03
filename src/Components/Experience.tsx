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

// 🔷 Title Box
const TitleBox = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin: 0 auto 1rem auto;
  font-family: var(--primary-font);
  letter-spacing: 1px;
  text-align: center;
  color: var(--sixth-color);
  padding: 1rem 3rem;
`;

// 🔷 Description
const Description = styled.p`
  font-size: 1.3rem;
  font-family: var(--secondary-font);
  color: var(--fifth-color);
  text-align: center;
  margin-bottom: 3rem;
`;

// 🔷 Cards Container with timeline
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 3rem;

  /* Vertical line */
  &::before {
    content: "";
    position: absolute;
    left: 25rem; /* distance from left edge */
    top: 0;
    width: 4px;
    height: 100%;
    background-color: var( --fourth-color);
    border-radius: 2px;
    z-index: 0;
  }
`;

// 🔷 Diamond marker
const DiamondMarker = styled.div`
  position: absolute;
  left: -1rem; /* connect to vertical line */
  top: 50%;
  transform: translateY(-50%) rotate(45deg); /* diamond shape */
  width: 30px;
  height: 30px;
  background-color: var( --fourth-color);
  z-index: 2;
  border: 2px solid var(--first-color); /* optional border */
`;

// 🔷 Experience Card (original styles kept)
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

  position: relative; /* for diamond marker positioning */

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
    color: #ffffff;
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

// 🔷 Background Shapes (kept original)
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
          <DiamondMarker />
          <Company>ES EthicSecur SofTec Pvt. Ltd.</Company>
          <Role>MERN Stack Developer</Role>
          <Duration>Jan 2024 - Present</Duration>
        </ExperienceCard>

        <ExperienceCard>
          <DiamondMarker />
          <Company>ERP Hub Solutions</Company>
          <Role>SAP ABAP Trainee</Role>
          <Duration>Apr 2023 - Jul 2023</Duration>
        </ExperienceCard>
      </CardsContainer>
    </ExperienceSection>
  );
};

export default ExperienceComponent;
