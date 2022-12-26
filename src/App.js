import "./App.css";
import { HStack, VStack } from "@chakra-ui/react";
import { MyProvider, useSettings } from "./ThemeContext";
import Toggle from "./Switch";

const Title = ({ children }) => {
  const { settings } = useSettings();
  return (
    <h2
      style={{
        color: settings === "sun" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const MyText = ({ children }) => {
  const { settings } = useSettings();
  return (
    <p
      style={{
        color: settings === "sun" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <VStack pt={15}>
        <HStack alignItems="center">
          <MyText>
            I work as a part-time instructor and a freelance web developer in
            the Philippines. I create unique websites and apps that you won't
            find in a template.
            <br />I have worked on web based projects for a range of clients
            providing Web Development (PHP, MySQL, HTML5, JavaScript/ES6,
            CSS/SASS, React, WordPress, Bootstrap, and more) and Design (Adobe
            XD, Illustrator, Photoshop, InDesign, etc.).
          </MyText>
        </HStack>
      </VStack>
    </div>
  );
};

const Head = () => {
  return (
    <header>
      <Title>Roseph Darl 💎</Title>
      <Toggle />
    </header>
  );
};

const Feed = () => {
  return (
    <div className="Feed">
      <Title>Front-End Developer</Title>
      <Content />
    </div>
  );
};

function App() {
  const { settings } = useSettings();
  return (
    <div
      className="App"
      style={{
        backgroundColor: settings === "sun" ? "white" : "black",
      }}
    >
      <Head />
      <Feed />
    </div>
  );
}

function Root() {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
}

export default Root;
