import styled from "styled-components";

// 🔷 Footer Section
const FooterSection = styled.footer`
  position: relative;
  background: var(--first-color);
  color: var(--sixth-color);
  padding: 3rem 2rem;
  text-align: center;
  overflow: hidden;
  border-top: 2px solid var(--fourth-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 🔷 Footer Text
const FooterText = styled.p`
  font-size: 1rem;
  font-family: var(--secondary-font);
  margin: 0.5rem 0;
`;

// 🔷 Social Links Container
const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

// 🔷 Social Icons
const SocialIcon = styled.a`
  color: var(--fourth-color);
  font-size: 1.5rem;
  font-family: var(--primary-font);
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--third-color);
    transform: scale(1.2);
  }
`;

// 🔷 Subtle Background Shape
const FooterShape = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  background: var(--fourth-color);
  opacity: 0.15;
  border-radius: 50%;
  filter: blur(120px);
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 0;
`;

const FooterComponent = () => {
  return (
    <FooterSection>
      <FooterShape />
      <FooterText>&copy; 2025 Kavya Venkatesh. All Rights Reserved.</FooterText>
      <SocialLinks>
        <SocialIcon
          href="https://github.com/kaviyav2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/kaviyav2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </SocialIcon>
        <SocialIcon href="mailto:kaviya.venkatesh@example.com">
          Email
        </SocialIcon>
      </SocialLinks>
    </FooterSection>
  );
};

export default FooterComponent;
