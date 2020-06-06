import * as React from 'react';
import styles from './MenuBar.module.css';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import IStoreState from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { logout } from '../../actions/auth';
import { Button } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import NoteIcon from '@material-ui/icons/Note';
import MaterialIcon from '@material-ui/icons/Palette';
import SubscribeIcon from '@material-ui/icons/PlaylistAdd';
import { user } from '../../apis/user/userGet';
import Profile from './Profile/Profile';
import { handleAxiosAsyncError } from '../../utils/helper/errorHandle/axiosError';

interface DispatchProps {
  logout: () => Promise<void>;
}

interface OwnProps extends RouteComponentProps {}

type Props = DispatchProps & OwnProps;

class MenuBar extends React.Component<Props> {
  componentDidMount() {
    // this.fetchUser()
  }

  fetchUser = async () => {
    try {
      const userInfo = await user();
    } catch (err) {
      handleAxiosAsyncError(err);
      console.log(err.message);
    }
  };

  handleLogOut = () => {
    this.props.logout();
  };

  navigate = (path: string) => {
    this.props.history.push({
      pathname: `/${path}`,
    });
  };

  render() {
    return (
      <div className={styles.menubar}>
        <div className={styles.pane}></div>
        <div className={styles.pane} onClick={() => this.navigate('editor')}>
          <Button size="medium" color="inherit">
            <WorkIcon fontSize={'small'} />
            工作区
          </Button>
        </div>
        <div
          className={styles.pane}
          onClick={() => this.navigate('editor/works')}
        >
          <Button size="medium" color="inherit">
            <NoteIcon fontSize={'small'} />
            作品库
          </Button>
        </div>
        {/* <div className={styles.pane} onClick={() => this.navigate('editor/templates')}>
        <Button size="medium" color="inherit">
          <FilterIcon fontSize={'small'} />
          模版库
        </Button>
      </div> */}
        <div
          className={styles.pane}
          onClick={() => this.navigate('editor/materials')}
        >
          <Button size="medium" color="inherit">
            <MaterialIcon fontSize={'small'} />
            素材库
          </Button>
        </div>
        <div className={`${styles.pane} ${styles.logout}`}>
          <Profile />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { isLoading } = state.status;
  return {
    isLoading,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => {
  return {
    logout: async () => {
      dispatch(logout());
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuBar)
);
