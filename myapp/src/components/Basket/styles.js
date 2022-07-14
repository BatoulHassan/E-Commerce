import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) =>({
    item: {
        display:'flex',
    },
  cartDetail: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '5%',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column', 
    },
  },
  itemsPrice: {
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
    },
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
  emptyButton: {
      minWidth: '100px',
      marginRight: '10px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        whiteSpace: 'nowrap',
    },
  },
  checkoutButton: {
    minWidth: '100px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
        whiteSpace: 'nowrap',
    },
},
container: {
    paddingTop: '60px',
},
title: {
    fontSize: '30px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
    },
},
}))