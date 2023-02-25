import { DndContext, rectIntersection } from "@dnd-kit/core";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Task from "./Task";
import Lane from "./Lane";

const Board = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const arrayLanes = [
    {
      title: "Done",
      items: doneItems,
      color: "red",
    },
    {
      title: "In Progress",
      items: inProgressItems,
      color: "yellow",
    },
    {
      title: "ToDo",
      items: todoItems,
      color: "green",
    },
  ];

  const addNewCard = (title) => {
    setTodoItems([...todoItems, { title }]);
  };
  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(event) => {
        const container = event.over?.id;
        const title = event.active.data.current?.title || "";
        const index = event.active.data.current?.index || 0;
        const parent = event.active.data.current?.parent || "ToDo";

        if (container === "ToDo") {
          setTodoItems([...todoItems, { title }]);
        } else if (container === "Done") {
          setDoneItems([...doneItems, { title }]);
        } else {
          setInProgressItems([...inProgressItems, { title }]);
        }
        if (parent === "ToDo") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
        }
      }}
    >
      <Flex flexDirection="column">
        <Task addCard={addNewCard} />
        <Flex flex="3">
          {arrayLanes.map(({ title, items, color }, index) => (
            <Lane key={index} title={title} items={items} color={color} />
          ))}
        </Flex>
      </Flex>
    </DndContext>
  );
};
export default Board;
