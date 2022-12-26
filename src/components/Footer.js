import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  // getting automatic full year integration
  const year = new Date().getFullYear();

  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>
            <a
              href="https://rdtungul.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rosephdarl
            </a>{" "}
            • © {year}
          </p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
