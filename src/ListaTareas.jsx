import * as React from 'react';
import TareaCard from './TareaCard';

export default function ListaTareas({ tareas, onEditar, onEliminar }) {
  if (tareas.length === 0) {
    return (
      <div className="tareas-container">
        <div className="mensaje-vacio">
          <p>Aquí se guardarán tus tareas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tareas-container">
      {tareas.map((tarea) => (
        <TareaCard
          key={tarea.id}
          tarea={tarea}
          onEditar={onEditar}
          onEliminar={onEliminar}
        />
      ))}
    </div>
  );
}
