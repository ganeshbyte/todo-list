import { CardWrapper } from "../../shared/component/CardWrapper";
import { Todo } from "./Todo/Todo";
export function Todos({ todos }) {
  return (
    <>
      <div className=" flex flex-col items-center">
        {todos.map((todo) => {
          return (
            <CardWrapper key={todo.id}>
              <Todo
                id={todo.id}
                title={todo.title}
                description={todo.description}
              ></Todo>
            </CardWrapper>
          );
        })}
      </div>
    </>
  );
}
