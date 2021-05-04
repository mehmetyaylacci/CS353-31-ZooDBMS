import CageCard from "./CageCard";
import CoordinatorSideBar from "./CoordinatorSideBar";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import {Grid, Paper} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RespondComplaintDialog from "./RespondComplaintDialog";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function RefundRequestPage() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);


    const cages = [
        { animalName: 'bird', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'bear', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'giraffe', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'lion', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'panda', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'snake', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'bird', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'bear', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'giraffe', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'lion', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'panda', label: 'Edit Event', minWidth: 50 ,align: 'right'},
        { animalName: 'snake', label: 'Edit Event', minWidth: 50 ,align: 'right'}
    ];

    const handleRespondClick = () => {
        setOpen(true);
    };

    const handleRespondClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <CoordinatorSideBar title = "Cage Page"></CoordinatorSideBar>
            <div style = {{justifyContent: 'center'}}>
                <br/>
                <Grid style = {{justifyContent: 'center'}} container spacing = {10}>
                    {
                        cages.map((event , index) =>
                            {
                                return (
                                    <Grid item xs={2}>
                                        <Card className={classes.root}>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Refund tour name
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Money - Person
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Accept
                                                </Button>
                                                <Button size="small" color="primary">
                                                    Reject
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            }
                        )
                    }
                </Grid>
            </div>
        </div>
    );
}

export default RefundRequestPage;
