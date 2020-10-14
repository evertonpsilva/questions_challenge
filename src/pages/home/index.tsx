import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Container, Divider, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { HomeProps } from "./types";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    main: {
        marginTop: '65px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: indigo.A400,
        display: 'flex',
        backgroundColor: indigo.A400
    },
    categoryTitle: {
        flex: 1,
        color: 'white',
        fontWeight: 700
    },
    icon: {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: indigo.A400
    }

}));

const Home: React.FC<HomeProps> = () => {
    const classes = useStyles();

    return (
        <div>
            <Box bgcolor={indigo.A400} color="white">
                <Container>
                    <Typography variant="h3">
                        Home
                    </Typography>
                </Container>
            </Box>
            <Box p={10}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.categoryTitle}>Categoria</Typography>
                            <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Home;