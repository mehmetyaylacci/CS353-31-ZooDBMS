import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ListAltIcon from '@material-ui/icons/ListAlt';
import IconButton from "@material-ui/core/IconButton";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const columns = [
    { id: 'eventName', label: 'Event Name', minWidth: 170 },
    { id: 'capacity', label: 'Capacity', minWidth: 170 },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'time',
        label: 'Time',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'location',
        label: 'Location',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'duration',
        label: 'Duration',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'totalMoneyRaised',
        label: 'Total Money Raised',
        minWidth: 170,
        align: 'right',
    },
    { id: 'editEvent', label: 'Edit Event', minWidth: 50 ,align: 'right'},
    { id: 'deleteEvent', label: 'Delete Event', minWidth: 50 ,align: 'right',},

];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function OrganizationTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    let iconMap = {
        "editEvent" : <CreateIcon/>,
        "deleteEvent": <DeleteIcon/>,
        "donations":<AttachMoneyIcon/>,
    }
    function createIcon(key,onClick,eventName)
    {
        return(
            <IconButton onClick={() => onClick(eventName)}>
                {iconMap[key]}
            </IconButton>
        );
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        let value = row[column.id];
                                        if(column.id === "editEvent" || column.id === "deleteEvent" || column.id === "donations" )
                                        {
                                            value = createIcon(column.id,column.onClick,row.eventName);
                                        }
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
