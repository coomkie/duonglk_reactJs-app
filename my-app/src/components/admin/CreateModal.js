import axios from 'axios';
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const CreateModal = ({ open, onClose, onCreated }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        avatar: '',
        createdAt: new Date().toISOString().split('T')[0],
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreate = async () => {
        try {
            await axios.post('https://6755100536bcd1eec8527d17.mockapi.io/users', {
                ...formData,
            });
            onCreated();
            onClose();
        }   
        catch (err) {
            console.log(err);
        }
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create User</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    fullWidth
                    onChange={handleChange} 
                />
                <TextField
                    margin="dense"
                    label="Address"
                    name="address"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Avatar"
                    name="avatar"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Created At"
                    name="createdAt"
                    value={formData.createdAt} 
                    InputProps={{
                        readOnly: true, 
                    }}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleCreate}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateModal;