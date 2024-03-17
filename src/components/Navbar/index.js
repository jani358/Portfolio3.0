// Importing necessary dependencies and components from styled components, React icons, and React Router
import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent"; // styled components for custom styling

import { FaBars } from "react-icons/fa"; // React icons for the mobile menu icon
import { Bio } from "../../data/constants"; // Constants such as Bio for data
import { useTheme } from "styled-components"; // Custom hook from styled-components for theming
import logoImage from "./logo.png"; // Image import for the logo
import { Link } from "react-router-dom"; // React Router's Link for navigation

// Functional component for the Navbar
const Navbar = () => {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = React.useState(false);
  // Theme hook from styled-components
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo with a Link to the homepage */}
        <NavLogo to="/">
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20", // Spacing for the logo
              cursor: "pointer",
            }}
          >
            {/* Logo image */}
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "3rem", height: "3rem", marginRight: "1rem" }} // Styling for the logo image
            />
            {/* Logo text */}
            <Span>Portfolio</Span>
          </Link>
        </NavLogo>
        {/* Mobile menu icon */}
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen); // Toggle mobile menu on click
            }}
          />
        </MobileIcon>
        {/* Navigation links */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        {/* Button container */}
        <ButtonContainer>
          {/* Button linking to GitHub profile */}
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {/* Mobile menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {/* Mobile links with click handlers to close the menu */}
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            {/* GitHub button in mobile menu */}
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`, // Using theme color for the button background
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
