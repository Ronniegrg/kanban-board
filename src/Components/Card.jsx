import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Flex, Text } from "@chakra-ui/react";
import { CSS } from "@dnd-kit/utilities";

const KanbanCard = ({ title, index, parent }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: `card-${title}`,
      data: {
        title,
        index,
        parent,
      },
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <Flex
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      bd="white"
      p={2}
      mt={1}
      borderRadius="md"
      boxShadow="md"
      w="100%"
      h="100%"
      alignItems="center"
      justifyConten="center"
      cursor="grab"
    >
      <Text>{title}</Text>
    </Flex>
  );
};

export default KanbanCard;
