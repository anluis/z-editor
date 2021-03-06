import * as React from 'react';
import { ImageCom } from '../../types/coms';
import zoomByDevice from '../../utils/helper/userWorkSuckers/zoomByDevice';
import styles from './common.module.css';

interface Props extends ImageCom {
  mode?: string;
  zIndex: number;
}

class Image extends React.Component<Props> {
  private Timer: any;

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

  render() {
    const { width, height, imgUrl, zIndex, x, y, mode, href } = this.props;

    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      backgroundImage: `url("` + imgUrl + `")`,
      backgroundSize: 'cover',
      zIndex: zIndex,
      left: x + 'px',
      top: y + 'px',
      overflow: 'hidden',
    };

    let bindInnerImg: React.CSSProperties = {
      width: '100%',
      overflow: 'hidden',
      height: '100%',
    };

    if (mode === 'editor') {
      bindStyle.left = '0';
      bindStyle.top = '0';
      bindStyle.height = '100%';
      bindStyle.width = '100%';
    }
    if (mode !== 'editor') {
      bindStyle.left = x * zoomByDevice() + 'px';
      bindStyle.top = y * zoomByDevice() + 'px';
      bindStyle.height = height * zoomByDevice() + 'px';
      bindStyle.width = width * zoomByDevice() + 'px';
      bindStyle.overflow = 'hidden';
      delete bindStyle.backgroundImage;
      delete bindStyle.backgroundSize;
    }

    const bindClass = href === '' ? styles.canclick : styles.cannotclick;

    return (
      <div
        style={bindStyle}
        className={bindClass}
        onClick={() => this.handleClickAction()}
      >
        {mode !== 'editor' && <img src={imgUrl} style={bindInnerImg} />}
      </div>
    );
  }
}

export default Image;
