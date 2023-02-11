import React, { Fragment } from "react";
import "./App.css";
interface UItask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const taskRef = React.useRef<HTMLInputElement>(null);
  const [newTask, setNewTask] = React.useState<string>("");
  const [tasks, setTasks] = React.useState<UItask[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTask(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskRef.current?.focus();
  };
  const addTask = (name: string) => {
    const newTasks: UItask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };
  const deleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    console.log(id);
    const newTasks = [...tasks];
    newTasks.splice(Number(id), 1);
    setTasks(newTasks);
  };
  const completeTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const newTasks = [...tasks];
    newTasks[Number(id)].done = true;
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={newTask}
          ref={taskRef}
          autoFocus
        />
        <button type="submit">save</button>
      </form>
      {tasks.map((task: UItask, i: number) => (
        <div key={i}>
          <h2>{task.name}</h2>
          <div>
            <button id={i.toString()} onClick={deleteTask}>
              🗑
            </button>
          </div>
          <div>
            <button
              id={i.toString()}
              onClick={completeTask}
              style={task.done ? { color: "green" } : { color: "red" }}
            >
              ✓
            </button>
          </div>
          <p>iniciar</p>
          <p style={task.done?{color:"green"}:{color:"red"}}>complete</p>
          <p>pending</p>
        </div>
      ))}
    </Fragment>
  );
}

export default App;
