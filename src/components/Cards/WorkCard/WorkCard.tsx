import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IStoreState, { Work } from '../../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { applyWork } from '../../../actions/works';
import { connect } from 'react-redux'

export interface WorkCardProps {
  classes: any
  title: string
  desc: string
}

interface DispatchProps {
  applyWork: (work: Work) => void
}

type Props = WorkCardProps & DispatchProps

export interface WorkCardState {

}

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 16,
  },
  desc: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
  },
}

const bindStyles = {
  margin: '20px'
}

function WorkCard(props: Props) {
  const { classes, title, desc } = props
  return (
    <Card className={classes.card} style={bindStyles}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title ? title : '无名称'}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.desc} color="textSecondary" gutterBottom>
          {desc ? desc : '无名称'}
        </Typography>
      </CardContent>
      <CardActions>
        {/* edit here */}
        <Button size="small" onClick={() => null}>选择</Button>
      </CardActions>
    </Card>
  )
}

const mapStateToProps = (state: IStoreState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    applyWork: (work) => {
      dispatch(applyWork(work))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(WorkCard))