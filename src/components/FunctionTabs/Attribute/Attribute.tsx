import * as React from 'react'
import styles from './Attribute.module.css'
import Input from '@material-ui/core/Input';
import { SketchPicker } from 'react-color'
import IStoreState from '../../../types/IStoreState'
import { connect } from 'react-redux'
import { ImageCom } from '../../../types/coms';

interface Props {
  Com: ImageCom | undefined
}

class Attribute extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
  }

  updateName = (e: string) => {

  }

  render() {
    const { Com } = this.props
    if (!Com) {
      return
    }
    return (
      <div className={styles.attributes}>
        <div className={styles.base}>
          <div className={styles.attrId}>
            组件编号: {Com.id}
          </div>
          <div className={styles.attrName}>
            <Input
              inputProps={{ maxlength: 12 }}
              onChange={e => this.updateName(e.target.value)}
              value={Com.name}
            />
          </div>
          <div className={styles.attrBg}>
            纯色背景
            <SketchPicker
              color={Com.styles.backgroundColor}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { coms } = state.work
  const { status } = state
  const Com = coms.find(e => e.id === status.currentComId) as ImageCom
  return {
    Com
  }
}

const mapDisPatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDisPatchToProps)(Attribute)