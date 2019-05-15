import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Work } from '../../../types/IStoreState';

export interface WorkCardProps {
  classes: any
  work: Work
  handleWorkChooseToApply: (work: Work) => void
  handleWorkChooseToDelete: (work: Work) => void
}

type Props = WorkCardProps

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
  const {
    classes,
    work,
    handleWorkChooseToApply,
    handleWorkChooseToDelete
  } = props
  const { title, desc } = props.work.settings
  const { _id } = props.work

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
          onClick={() => handleWorkChooseToApply(work)}
        >
          编辑
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => handleWorkChooseToDelete(work)}
        >
          删除
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(WorkCard)