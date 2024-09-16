import { useState } from "react";
export function InputTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alertMessage, setAlertMessage] = useState(false);

  const handleOnClickTitle = (event) => {
    setAlertMessage(false);
    const title = event.target.value;
    setTitle(title);
  };

  const handleOnClickDescription = (event) => {
    setAlertMessage(false);
    const description = event.target.value;
    setDescription(description);
  };

  const saveTodoHandler = () => {
    if (title === "" || description === "") {
      setAlertMessage(true);
      return;
    }
    setAlertMessage(false);
    //Make An Api Call Todo Save Todos
    setTitle("");
    setDescription("");
  };
  return (
    <>
      {" "}
      {alertMessage && (
        <div className="text-3xl text-red-400">
          Title and Description is Mandatory
        </div>
      )}
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Title"
                onChange={handleOnClickTitle}
                value={title}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Descrition"
                onChange={handleOnClickDescription}
                value={description}
              />
              <button
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                onClick={saveTodoHandler}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
