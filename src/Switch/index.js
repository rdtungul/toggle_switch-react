import "./Styles.css";
import { HStack, VStack } from "@chakra-ui/react";
import { useSettings } from "../ThemeContext";

const Toggle = () => {
  const { settings, toggleSettings } = useSettings();

  return (
    <VStack>
      <HStack>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings === "sun"}
            onChange={toggleSettings}
          />
          <span className="slide circle" />
        </label>
      </HStack>
    </VStack>
  );
};

export default Toggle;
