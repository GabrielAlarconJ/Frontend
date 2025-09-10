import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import ModalEditarTarea from './ModalEditarTarea';
import ModalEliminarTarea from './ModalEliminarTarea';
import ModalAgregarTarea from './ModalAgregarTarea';

export default function App() {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Lista de Tareas</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          size="large"
          onClick={() => setOpenAdd(true)}
        >
          Agregar Tarea
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', backgroundColor: '#f5f5f5', padding: '20px', justifyContent: 'center' }}>
        {/* Tarea 1 */}
        <div style={{ border: '2px solid #acb', borderRadius: '8px', padding: '16px', flex: '1 1 300px', background: '#fff' }}>
          <h2>Comprar pan</h2>
          <p>Pendiente</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon />} onClick={() => setOpenEdit(true)} />
            <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => setOpenDelete(true)} />
          </div>
        </div>
        {/* Tarea 2 */}
        <div style={{ border: '2px solid #acb', borderRadius: '8px', padding: '16px', flex: '1 1 300px', background: '#fff' }}>
          <h2>Limpiar la casa</h2>
          <p>Pendiente</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon />} onClick={() => setOpenEdit(true)} />
            <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => setOpenDelete(true)} />
          </div>
        </div>
        {/* Tarea 3 */}
        <div style={{ border: '2px solid #acb', borderRadius: '8px', padding: '16px', flex: '1 1 300px', background: '#fff' }}>
          <h2>Leer un libro</h2>
          <p>Realizada</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <Button variant="outlined" color="primary" size="small" startIcon={<EditIcon />} onClick={() => setOpenEdit(true)} />
            <Button variant="outlined" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => setOpenDelete(true)} />
          </div>
        </div>
      </div>
      <ModalEditarTarea open={openEdit} onClose={() => setOpenEdit(false)} />
      <ModalEliminarTarea open={openDelete} onClose={() => setOpenDelete(false)} />
      <ModalAgregarTarea open={openAdd} onClose={() => setOpenAdd(false)} />
    </div>
  );
}
