import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
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
  const { classes, handleMaterialChooseAndFresh } = props;
  return (
    <>
      <Tooltip title="取消" aria-label="Add">
        <Fab color="primary" className={classes.absolute} onClick={handleMaterialChooseAndFresh}>
          <CloseIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

// @ts-ignore
export default withStyles(styles)(SimpleTooltips)