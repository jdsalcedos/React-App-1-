import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); // solo quiero traer createTask de todo el TaskContext

  const HandleSubmit = (event) => {
    event.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={HandleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tareas</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          autoFocus //para que al iniciar el cursor ya se encuentre en ese input
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
