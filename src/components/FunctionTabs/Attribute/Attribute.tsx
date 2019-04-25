import * as React from 'react'
import styles from './Attribute.module.css'
import Input from '@material-ui/core/Input';
import { SketchPicker } from 'react-color'
import IStoreState from '../../../types/IStoreState'
import { connect } from 'react-redux'
import { Com } from '../../../types/coms';
import { getCurrentComById } from '../../../utils/getters/works'

interface Props {
  currentCom: Com | undefined
}

class Attribute extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props)
  }

  updateName = (e: string) => {

  }

  render() {
    const { currentCom } = this.props
    if (!currentCom) {
      return null
    }
    return (
      <div className={styles.attributes}>
        <div className={styles.base}>
          <div className={styles.attrId}>
            组件编号: {currentCom.id}
          </div>
          <div className={styles.attrName}>
            <Input
              inputProps={{ maxLength: 12 }}
              onChange={e => this.updateName(e.target.value)}
              value={currentCom.name}
            />
          </div>
          <div className={styles.attrBg}>
            纯色背景
            <SketchPicker
            // color={currentCom.styles.backgroundColor}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const currentCom = getCurrentComById(state)
  return {
    currentCom
  }
}

const mapDisPatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDisPatchToProps)(Attribute)