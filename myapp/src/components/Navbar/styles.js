import { makeStyles } from "@material-ui/core";

export default makeStyles( () => ({
    appbar: {
       boxShadow: "none",
       borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
    },
    image: {
        marginRight: '10px',
    },
    grow: {
        flexGrow: 1,
    },
}))