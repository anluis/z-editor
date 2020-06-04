import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { Com } from '../../../types/coms';
import maxOfArray from '../../../utils/helper/maxOfArray';
import { initVideo } from '../../../constants/coms';
import { cloneDeep } from 'lodash'
import { setMaterialChoosenCom } from '../../../actions/status';
import { AnyAction } from 'redux';
import IStoreState from '../../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux'
import materialDelete from '../../../apis/materials/materialDelete';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import { VideoMaterial, Material } from '../../../types/materials';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

interface OwnProps {
  classes: any,
  belong?: string
  comsIds: Array<number>
  material: VideoMaterial
  handleDeleteDialog: (material: Material) => void
}

interface DispatchProps {
  setMaterialChoosenCom: (com: Com | null) => void
}

type Props = OwnProps & DispatchProps


function VideoCard(props: Props) {
  const generateComAndSetInStore = () => {
    const newId = maxOfArray(props.comsIds) + 1
    const newVideo = cloneDeep(initVideo)
    newVideo.id = newId
    newVideo.name = `Video-${newId}`
    newVideo.videoUrl = props.material.videoUrl
    props.setMaterialChoosenCom(newVideo)
  }
  const bindStyles = {
    margin: '20px'
  }
  const { classes, belong, handleDeleteDialog, material } = props
  const { name, imgUrl } = material

  return (
    <Card className={classes.card} style={bindStyles}>
      <CardMedia
        className={classes.media}
        title={name}
        image={imgUrl}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name ? name : '无名称'}
        </Typography>
      </CardContent>
      <CardActions>
        {belong === 'dialog' && <Button size="small" onClick={generateComAndSetInStore}>选择</Button>}
        {belong !== 'dialog' && <Button size="small" color="secondary" onClick={() => handleDeleteDialog(material)}>删除</Button>}
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state: IStoreState) => {
  const comsIds = state.work.present.coms.map(item => { return item.id })
  return {
    comsIds
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    setMaterialChoosenCom: (com: Com | null) => {
      dispatch(setMaterialChoosenCom(com))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VideoCard))
