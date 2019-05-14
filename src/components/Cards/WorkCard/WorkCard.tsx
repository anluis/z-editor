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
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface WorkCardProps extends RouteComponentProps {
  classes: any
  work: Work
  handleChooseWork: (work: Work) => void
}

interface DispatchProps {
  applyWork: (work: Work) => void
}

type Props = WorkCardProps & DispatchProps

const styles = {
  card: {
    minWidth: 400,
    maxWidth: 400
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: 900
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
  const { classes, applyWork, work, handleChooseWork } = props
  const { title, desc } = props.work.settings
  const { _id } = props.work
  const hanldeApplyWork = () => {
    applyWork(work)
    props.history.push({
      pathname: '/editor'
    })
  }
  const workUrl = window.location.origin + `/work/${_id}/0`
  return (
    <Card className={classes.card} style={bindStyles}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.desc} color="textSecondary" gutterBottom>
          {desc}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.desc} color="textSecondary" gutterBottom>
          作品链接: <a href={workUrl} target="_blank">{workUrl}</a>
        </Typography>
      </CardContent>
      <CardActions>
        {/* edit here */}
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={() => hanldeApplyWork()}
        >
          编辑
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => handleChooseWork(work)}
        >
          删除
        </Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(WorkCard)))