import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
      // maxWidth: 345, original width style
      maxWidth: '100%',
      height: '500px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection:'row'
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }));