import * as React from 'react';
import styles from './GlobalLoading.module.css';
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux';

interface OwnProps {
  isLoading: boolean;
}

type Props = OwnProps;

class GlobalLoading extends React.Component<Props> {
  render() {
    const { isLoading } = this.props;
    if (!isLoading) {
      return null;
    }
    return (
      <div className={styles.loading}>
        <div className={styles.remindtext}>加载中...</div>
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

export default connect(mapStateToProps)(GlobalLoading);
