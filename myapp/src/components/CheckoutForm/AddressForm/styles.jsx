import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    textField: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    submitBtn: {
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
        },
    }
}))