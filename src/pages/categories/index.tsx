import React from 'react';
import { Box, Container, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { HomeProps } from "./types";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    header: {
        background: theme.palette.primary.main,
        color: 'white',
        padding: '5px 0'
    },
    main: {
        marginTop: '65px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        display: 'flex',
        backgroundColor: theme.palette.primary.main
    },
    categoryTitle: {
        flex: 1,
        color: 'white',
        fontWeight: 700
    },
    icon: {
        borderRadius: '50%',
        backgroundColor: theme.palette.secondary.main,
        color: 'white'
    }

}));

const Home: React.FC<HomeProps> = () => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.header}>
                <Container>
                    <Typography variant="h3">
                        Categories
                    </Typography>
                </Container>
            </Box>
            <Box p={10}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Link to="/question">
                            <Paper className={classes.paper}>
                                <Typography className={classes.categoryTitle}>Categoria</Typography>
                                <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/question">
                            <Paper className={classes.paper}>
                                <Typography className={classes.categoryTitle}>Categoria</Typography>
                                <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/question">
                            <Paper className={classes.paper}>
                                <Typography className={classes.categoryTitle}>Categoria</Typography>
                                <ChevronRightIcon className={classes.icon} color="primary"></ChevronRightIcon>
                            </Paper>
                        </Link>
                    </Grid>
                    
                </Grid>
            </Box>
        </div>
    );
};

export default Home;