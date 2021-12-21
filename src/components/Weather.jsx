import { Box, makeStyles } from '@material-ui/core';
import logo from '../images/bg-1.jpg';
import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems:'center',
        width:'65%',
        margin: '0 auto',
    },

    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '90%',
        width: '40%',
        backgroundSize: 'cover',
        borderRadius: '15px 0px 0px 15px'
    },

    rightContainer: {
        background: 'linear-gradient(to right, #636FA4, #E8CBC0)',
        height: '90%',
        width: '70%',
        borderRadius: '15px 15px 15px 0px'
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather