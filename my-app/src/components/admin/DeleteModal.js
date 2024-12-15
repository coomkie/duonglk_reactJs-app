import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import axios from 'axios';

const DeleteModal = ({ open, onClose, user, onDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete( `https://6755100536bcd1eec8527d17.mockapi.io/users/${user.id}`);
      onDeleted(); 
      onClose(); 
    } catch (err) {
      console.error('Error deleting user:', err.message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete User</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete this User?
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
