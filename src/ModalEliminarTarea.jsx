import * as React from 'react';
import { Button, Modal, Box } from '@mui/material';

export default function ModalEliminarTarea({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        minWidth: 300
      }}>
        <h2>Eliminar Tarea</h2>
        <p>¿Seguro que deseas eliminar esta tarea?</p>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}
