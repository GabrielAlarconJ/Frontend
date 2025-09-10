import * as React from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TareaCard({ tarea, onEditar, onEliminar }) {
  return (
    <div className="tarea-card">
      <div className="tarea-contenido">
        <h3 className="tarea-texto">{tarea.texto}</h3>
        <div className="tarea-botones">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => onEditar(tarea)}
            size="small"
          >
            Editar
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => onEliminar(tarea)}
            size="small"
          >
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}
