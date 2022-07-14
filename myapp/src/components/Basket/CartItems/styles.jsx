import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    media: {
        marginTop: '20px',
        height: '200px',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardCategory: {
        [theme.breakpoints.down('md')] : {
            fontSize: '12px',
        },
    },
    cardPrice: {
        [theme.breakpoints.down('md')] : {
            fontSize: '12px',
        },
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
    },
    cardBtn: {
        minWidth: '30px',
    },
    removeBtn: {
        [theme.breakpoints.down('md')] : {
            fontSize: '12px',
        },
    },
}))