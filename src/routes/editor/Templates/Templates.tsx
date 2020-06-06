import * as React from 'react';
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux';
import styles from './Templates.module.css';

interface OwnProps {
  accessToken: string;
}

type Props = OwnProps;

class Templates extends React.Component<Props> {
  render() {
    return (
      <div className={styles.templates}>
        <img src="https://cdn.xingstation.cn/fe/actiview/img/actiview-logo.png" />
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { accessToken } = state.auth;
  return {
    accessToken,
  };
};

export default connect(mapStateToProps)(Templates);
