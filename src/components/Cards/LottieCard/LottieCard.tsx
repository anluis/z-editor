import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { initLottie } from '../../../constants/coms';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setMaterialChoosenCom } from '../../../actions/status';
import { Com } from '../../../types/coms';
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux';
import { cloneDeep } from 'lodash';
import maxOfArray from '../../../utils/helper/maxOfArray';
import CardMedia from '@material-ui/core/CardMedia';
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import materialDelete from '../../../apis/materials/materialDelete';
import { Material, LottieMaterial } from '../../../types/materials';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 275,
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
  classes: any;
  belong?: string;
  comsIds: Array<number>;
  material: LottieMaterial;
  handleDeleteDialog: (material: Material) => void;
}

interface DispatchProps {
  setMaterialChoosenCom: (com: Com | null) => void;
}

type Props = OwnProps & DispatchProps;

function ImageCard(props: Props) {
  const generateComAndSetInStore = () => {
    const newId = maxOfArray(props.comsIds) + 1;
    const newLottie = cloneDeep(initLottie);
    newLottie.id = newId;
    newLottie.name = `Lottie-${newId}`;
    newLottie.path = props.material.path;
    newLottie.assetsPath = props.material.assetsPath;
    props.setMaterialChoosenCom(newLottie);
  };
  const bindStyles = {
    margin: '20px',
  };
  const { classes, belong, material, handleDeleteDialog } = props;
  const { name, desc, imgUrl } = props.material;

  return (
    <Card className={classes.card} style={bindStyles}>
      <CardMedia className={classes.media} image={imgUrl} title={name} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography component="p">{desc}</Typography>
      </CardContent>
      <CardActions>
        {belong === 'dialog' && (
          <Button size="small" onClick={generateComAndSetInStore}>
            选择
          </Button>
        )}
        {belong !== 'dialog' && (
          <Button
            size="small"
            color="secondary"
            onClick={() => handleDeleteDialog(material)}
          >
            删除
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state: IStoreState) => {
  const comsIds = state.work.present.coms.map((item) => {
    return item.id;
  });
  return {
    comsIds,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): DispatchProps => {
  return {
    setMaterialChoosenCom: (com: Com | null) => {
      dispatch(setMaterialChoosenCom(com));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ImageCard));
