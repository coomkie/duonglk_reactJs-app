import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import axios from 'axios';

const UpdateModal = ({ open, onClose, onUpdated, user }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        avatar: '',
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(
                `https://6755100536bcd1eec8527d17.mockapi.io/users/${user.id}`,
                formData 
            );
            onUpdated(); 
            onClose(); 
        } catch (err) {
            console.error('Error updating users:', err.message);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Update User</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    fullWidth
                    value={formData.name || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Address"
                    name="address"
                    fullWidth
                    value={formData.address || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Avatar"
                    name="aavatar"
                    fullWidth
                    value={formData.avatar || ''}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleUpdate}>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateModal;
