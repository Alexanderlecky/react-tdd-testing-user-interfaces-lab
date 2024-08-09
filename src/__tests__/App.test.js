import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("display a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
} );

test("displays an image of myself with appropriate alt text", () => {
    render(<App />);
    const image = screen.getByAltText(/image of me/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining("logo192.png"));
  });

  
  test("displays a second-level heading with the text 'About Me'", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /About/i, level: 2 });
    expect(heading).toBeInTheDocument();
  });
  
  test("displays a paragraph for biography", () => {
    render(<App />);
    const bio = screen.getByText(/Hi, I'm Alexander Karanja, a 20-year-old tech enthusiast from Nairobi, Kenya. With a certificate in Cybersecurity under my belt, I'm currently pursuing Software Engineering to expand my expertise in the ever-evolving tech world. I'm passionate about securing digital spaces and building innovative software solutions. As I continue to grow in my career, I'm excited to contribute to the tech community and make a positive impact through my skills and knowledge./i);
    expect(bio).toBeInTheDocument();
  });
  

  test("displays links to GitHub and LinkedIn", () => {
    render(<App />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Alexanderlecky');
  
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/alexander-karanja-');
  });
  