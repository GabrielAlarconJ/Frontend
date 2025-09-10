import * as React from 'react';
import { Button, Modal, Box } from '@mui/material';

export default function ModalEditarTarea({ open, onClose }) {
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
        <h2>Editar Tarea</h2>
        <p>¿Seguro que deseas editar esta tarea?</p>
        <Button variant="contained" color="primary" onClick={onClose}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}
