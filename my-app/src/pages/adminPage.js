import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import CreateModal from '../components/admin/CreateModal';
import UpdateModal from '../components/admin/UpdateModal';
import DeleteModal from '../components/admin/DeleteModal';

const AdminPage = () => {
  const [datas, setDatas] = useState([]);
  const [Error, setError] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await axios.get('https://6755100536bcd1eec8527d17.mockapi.io/users');
      setDatas(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div>
      <Box>
        <Button variant="contained" color="primary" sx={{ margin: "20px 10px" }} onClick={() => setOpenCreateModal(true)}>
          Add User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Index</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Avatar</StyledTableCell>
              <StyledTableCell align="left">Create At</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data, index) => (
              <StyledTableRow key={data.id}>
                <StyledTableCell align="left">{index + 1}</StyledTableCell>
                <StyledTableCell align="left">{data.name}</StyledTableCell>
                <StyledTableCell align="left">{data.address}</StyledTableCell>
                <StyledTableCell align="left"><img style={{ width: '80px', height: '100px' }} src={data.avatar} /></StyledTableCell>
                <StyledTableCell align="left">{data.createdAt}</StyledTableCell>
                <StyledTableCell align="left" style={{ height: '100px', display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      setSelectedUser(data);
                      setOpenUpdateModal(true);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedUser(data);
                      setOpenDeleteModal(true);
                    }}
                    sx={{ padding: '2% 3%' }} variant="contained" color="error">Delete</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateModal
        open={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        onCreated={fetchUser}
      />
      <UpdateModal
        open={openUpdateModal}
        onClose={() => setOpenUpdateModal(false)}
        user={selectedUser}
        onUpdated={fetchUser}
      />
      <DeleteModal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        user={selectedUser}
        onDeleted={fetchUser}
      />
    </div>
  );
};

export default AdminPage;