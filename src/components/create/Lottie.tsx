import * as React from 'react';
const lottie = require('lottie-web');
import { LottieCom } from '../../types/coms';
import zoomByDevice from '../../utils/helper/userWorkSuckers/zoomByDevice';
import styles from './common.module.css';
import { qiniuUrl } from '../../constants/base';
interface Props extends LottieCom {
  mode?: string;
  zIndex: number;
}

class Lottie extends React.Component<Props> {
  initAnimation = () => {
    const { id, assetsPath, path } = this.props;
    const el = document.getElementById(`lottie-${id}`);
    if (el) {
      lottie.loadAnimation({
        container: el, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        assetsPath: qiniuUrl + '/cms/' + assetsPath + '/',
        path: path, // the path to the animation json
      });
    }
  };

  handleClickAction = () => {
    const { href, mode } = this.props;
    if (mode === 'editor') {
      return;
    }
    if (!href || href === '') {
      return;
    } else {
      window.location.href = href;
    }
  };

  componentDidMount() {
    this.initAnimation();
  }
  render() {
    const { id, width, height, zIndex, x, y, mode, href } = this.props;

    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      zIndex: zIndex,
      left: x + 'px',
      top: y + 'px',
    };
    if (mode === 'editor') {
      bindStyle.left = '0';
      bindStyle.top = '0';
      bindStyle.width = '100%';
      bindStyle.height = '100%';
    }
    if (mode !== 'editor') {
      bindStyle.left = x * zoomByDevice() + 'px';
      bindStyle.top = y * zoomByDevice() + 'px';
      bindStyle.height = height * zoomByDevice() + 'px';
      bindStyle.width = width * zoomByDevice() + 'px';
    }

    const bindClass = href === '' ? styles.cannotclick : styles.canclick;
    return (
      <div
        id={`lottie-${id}`}
        className={bindClass}
        onClick={() => this.handleClickAction()}
        style={bindStyle}
      ></div>
    );
  }
}

export default Lottie;
