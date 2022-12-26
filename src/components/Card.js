import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import "./Card.css";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
      <VStack
        textAlign="left"
        backgroundColor="white"
        textColor="black"
        borderRadius="10px"
        alignItems="left"
        alignSelf="flex-start"
      >
        <Image borderRadius="10px" src={imageSrc} />
        <Heading pl="10px" as="h2" size="sm">
          {title}
        </Heading>
        <Text pl="10px" textColor="gray">
          {description}
        </Text>
        <a href="#projects-section">
          <Text pl="10px" mb="10px">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </a>
      </VStack>
    </HStack>
  );
};

export default Card;
