import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar ,
    layout: {
        width: '70%',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
    },
}))