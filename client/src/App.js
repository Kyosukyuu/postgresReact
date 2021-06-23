import { ChakraProvider, Box } from "@chakra-ui/react";
import { GenshinProvider } from "./contexts/GenshinContext";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <ChakraProvider>
        <GenshinProvider>
          <Home />
        </GenshinProvider>
      </ChakraProvider>
    </Router>
  );
};

export default App;
