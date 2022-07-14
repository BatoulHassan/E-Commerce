import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root:{
        maxWidth:"100%",
    },
    media:{
        width: 200,
        height: 80,
        margin: 'auto',
        //padding: 10,
        marginTop: 30,
        paddingTop : '56.25%',
    },
    cardContent:{
        display: "flex",
        justifyContent: "space-between",
    },
    cardActions:{
        display: "flex",
        justifyContent: "flex-end",
    },
}));