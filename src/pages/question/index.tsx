import React from 'react';
import { Box, Button, Divider, FormControlLabel, LinearProgress, makeStyles, RadioGroup, Typography } from "@material-ui/core";
import { DialogAnswer, RadioButton } from '../../components';

const useStyles = makeStyles((theme) => ({
    main: {
        height: '100vh',
    },
    questionBox: {
        height: '70%',
        width: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        borderRadius: 10,
        padding: '40px 80px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        textAlign: 'center', 
        fontWeight: 500
    },
    progressBar: {
        height: 10
    },
    hideButton: {
        display:'none'
    },
    questionHeader: {
        marginBottom: 15,
        display: 'block'
    },
    questionContent: {
        lineHeight: 1.5,
        fontWeight: 600,
        marginBottom: 15,
    },
    radioGroup: {
        marginTop: 15,
    },
    questionAnswer:{
        wordBreak: 'break-word',
        textAlign: 'left',
        background: 'white',
        borderRadius: 10,
        marginBottom: 15,
        color: theme.palette.primary.main,
        padding: 5,
        fontWeight: 700,
    },
    selectedAswer: {
        background: theme.palette.secondary.main,
        color: 'white'
    },
    iconAnswer: {
        fontSize: 64,
        textAlign: 'center',
        color: 'green'
    },
    confirmButton: {
        color: 'white',
    }
}));

const Question: React.FC = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [sucessAnswer, setSucessAnswer] = React.useState(false);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const verifyAnswer = () => {

        if(value === "male"){
            console.log("Resposta certa");
            setSucessAnswer(true);
        }else{
            console.log("Resposta errada");
            setSucessAnswer(false);
        }
        setOpen(true);
    };

    return (
        <Box className={classes.main}>
            <LinearProgress variant="determinate" className={classes.progressBar} value={10} color="primary"/>
            <div className={classes.questionBox}>
                <span className={classes.questionHeader}>Question 6/10 - Medium</span>
                <Typography variant="h6" className={classes.questionContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu molestie lectus, sit amet tristique erat. Duis sollicitudin diam ac erat hendrerit semper.
                </Typography>
                <Divider color={'secondary'}></Divider>
                <RadioGroup className={classes.radioGroup} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<RadioButton />} label="sdfgdfsgsdfgdfsgsdfgdsfgdfgdfsgsdfgsdfgfdgsdfgdfsgdfgdfgfdgdfgdfgdfgdfsgdfgdfsgsdfgfsdgdfsgdfsgdfsgdfsgdfgsdfgdfsgsdfgdfgdfsg" className={[classes.questionAnswer, value === "female" ? classes.selectedAswer : ''].join(' ')}/>
                    <FormControlLabel value="male" control={<RadioButton />} label="Male" className={[classes.questionAnswer, value === "male" ? classes.selectedAswer : ''].join(' ')}/>
                    <FormControlLabel value="other" control={<RadioButton />} label="Other" className={[classes.questionAnswer, value === "other" ? classes.selectedAswer : ''].join(' ')}/>
                    <FormControlLabel value="disabled" control={<RadioButton />} label="(Disabled option)" className={[classes.questionAnswer, value === "disabled" ? classes.selectedAswer : ''].join(' ')}/>
                </RadioGroup>
                <Button variant="contained" color="secondary" onClick={verifyAnswer} className={!value ? classes.hideButton : classes.confirmButton}>Confirm</Button>
            </div>
            <DialogAnswer onClose={handleClose} open={open} sucess={sucessAnswer} ></DialogAnswer>
        </Box>
        
    );
};

export default Question;