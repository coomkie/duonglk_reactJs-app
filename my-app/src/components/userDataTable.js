import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateUserModalPage from './createUserModalPage';

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


export default function UserDataTable({ cols, users }) {
    return (
        <div style={{ width: '90%', margin: '20px auto' }}>
            <CreateUserModalPage/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {cols.map((col, index) => (
                                <StyledTableCell align="center" key={index}>{col}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell align="center">{user.id}</StyledTableCell>
                                <StyledTableCell align="center">{user.name}</StyledTableCell>
                                <StyledTableCell align="center">{user.address}</StyledTableCell>
                                <StyledTableCell align="center">{user.createdAt}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <img src={user.avatar} alt="avatar" style={{ width: '50px', height: '50px' }} />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <button>Update</button>
                                    <span> | </span>
                                    <button>Delete</button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
