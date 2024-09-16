import { Heading } from "../../shared/component/Heading";
import { InputTodo } from "../InputTodo/InputTodo";
import { Todos } from "../Todos/Todos";

export function Home() {
  const todos = [
    {
      title: "go to gym",
      description: "go to gym",
    },
    {
      title: "go to bed",
      description: "go to bed",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center">
        <Heading title={"Todo List"}></Heading>
      </div>
      <InputTodo></InputTodo>
      <Todos todos={todos}></Todos>
    </>
  );
}
