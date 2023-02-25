import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Task = ({ addCard }) => {
  const [title, setTitle] = useState("");

  return (
    <Flex flex="3" padding="5">
      <Flex
        flex="1"
        bg="black"
        borderRadius="md"
        boxShadow="md"
        flexDirection="row"
        p={2}
      >
        <Input
          mt={2}
          placeholder="Add a task"
          _placeholder={{ color: "white" }}
          color="white"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Button
          ml={1}
          mt={2}
          colorScheme="messenger"
          onClick={() => {
            addCard(title);
            setTitle("");
          }}
        >
          Add Task
        </Button>
      </Flex>
    </Flex>
  );
};

export default Task;
