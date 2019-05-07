import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme: any) => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

function SimpleTooltips(props: any) {
  const { classes, handleMaterialAdd } = props;
  return (
    <>
      {/* <Tooltip title="Add" aria-label="Add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip> */}
      <Tooltip title="新增" aria-label="Add">
        <Fab color="primary" className={classes.absolute}>
          <AddIcon onClick={handleMaterialAdd} />
        </Fab>
      </Tooltip>
    </>
  );
}

// @ts-ignore
export default withStyles(styles)(SimpleTooltips)