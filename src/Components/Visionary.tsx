import styled from "styled-components";

// Custom styled components for the tags
const CustomTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--sixth-color);
`;

const CustomParagraph = styled.div`
  font-size: 1rem;
  color: var(--fifth-color);
`;

const VisionarySection = styled.section`
  // background-color: var(--first-color);
  color: var(--fifth-color);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0%;
    right: 50%;
    width: 150px;
    height: 200px;
    background-color: var(--second-color);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3; /* Increased opacity for visibility */
  }

  /* Optional: Add a custom polygon shape */
  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 10%;
    width: 200px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--third-color);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    transform: translateX(-50%);
    z-index: -1;
    opacity: 0.5;
        filter: blur(70px);

  }
`;

const StyledShape = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background: var(--fourth-color);
  opacity: 0.4;
  top: 20%;
  right: 20%;
  transform: rotate(45deg);
  border-radius: 20px;
  filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: var(--primary-font);
  color: var(--sixth-color);
`;

const Subheading = styled.h2`
  font-size: 1.8rem;
  color: var(--third-color);
  margin-bottom: 2rem;
  font-family: var(--primary-font);
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
`;

const Box = styled.div`
  margin: 1.5rem;
  padding: 2.5rem;
  border-radius: 20px;
  background-color: var(--first-color);
  color: var(--sixth-color);
  text-align: center;
  box-shadow: inset 6px 2px 3px 1px var(--fourth-color); /* Inner shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0px 3px 10px 2px var(--fourth-color); /* Keeps inner shadow on hover */
    
  }
`;

const VisionaryComponent = () => {
  return (
    <VisionarySection>
      <Title>Visionary</Title>
      <Subheading>
        Launching My Career: A Fresh Perspective on Full Stack Development
      </Subheading>
      <BoxContainer>
        <Box>
          <CustomTitle>Personalization</CustomTitle>
          <CustomParagraph>
            A glimpse of my individual journey, showcasing my dedication and
            passion for web development.
          </CustomParagraph>
        </Box>
        <Box>
          <CustomTitle>Reason to Hire Me</CustomTitle>
          <CustomParagraph>
            What sets me apart is my continuous learning attitude and
            problem-solving skills.
          </CustomParagraph>
        </Box>
      </BoxContainer>
      <StyledShape />
    </VisionarySection>
  );
};

export default VisionaryComponent;
