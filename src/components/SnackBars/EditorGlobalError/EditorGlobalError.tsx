import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

// const styles = (theme: any) => ({
//   close: {
//     padding: theme.spacing.unit / 2,
//   },
// });

// interface OwnProps {
//   classes: any
// }

// type Props = OwnProps

// class ConsecutiveSnackbars extends React.Component<Props> {
//   queue = [];

//   state = {
//     open: false,
//     messageInfo: {},
//   };

//   // @ts-ignore
//   handleClick = (message) => () => {
//     this.queue.push({
//       message,
//       key: new Date().getTime(),
//     });

//     if (this.state.open) {
//       // immediately begin dismissing current message
//       // to start showing new one
//       this.setState({ open: false });
//     } else {
//       this.processQueue();
//     }
//   };

//   processQueue = () => {
//     if (this.queue.length > 0) {
//       this.setState({
//         messageInfo: this.queue.shift(),
//         open: true,
//       });
//     }
//   };

//   // @ts-ignore
//   handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     this.setState({ open: false });
//   };

//   handleExited = () => {
//     this.processQueue();
//   };

//   render() {
//     const { classes } = this.props;
//     const { messageInfo } = this.state;

//     return (
//       <div>
//         <Button onClick={this.handleClick('message b')}>Show message B</Button>
//         <Snackbar
//           key={messageInfo.key}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           open={this.state.open}
//           autoHideDuration={6000}
//           onClose={this.handleClose}
//           onExited={this.handleExited}
//           ContentProps={{
//             'aria-describedby': 'message-id',
//           }}
//           message={<span id="message-id">{messageInfo.message}</span>}
//           action={[
//             <IconButton
//               key="close"
//               aria-label="Close"
//               color="inherit"
//               className={classes.close}
//               onClick={this.handleClose}
//             >
//               <CloseIcon />
//             </IconButton>,
//           ]}
//         />
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(ConsecutiveSnackbars);