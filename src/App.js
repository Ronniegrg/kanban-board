import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import Board from "./Components/Board";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div style={{ minHeight: "85vh" }}>
        <Text fontSize="6xl" textAlign="center" fontWeight="bold">
          Kanban Board
        </Text>
        {/*<div*/}
        {/*  style={{*/}
        {/*    margin: "5vh 0",*/}
        {/*    justifyContent: "center",*/}
        {/*    alignItems: "center",*/}
        {/*    display: "flex",*/}
        {/*    height: "10vh",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <h1>Kanban Board</h1>*/}
        {/*</div>*/}
        <Board />
      </div>
    </ChakraProvider>
  );
}

export default App;
