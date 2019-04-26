import * as React from 'react'
import styles from './Attribute.module.css'
import Input from '@material-ui/core/Input';
import { SketchPicker, RGBColor } from 'react-color'
import IStoreState from '../../../types/IStoreState'
import { connect } from 'react-redux'
import { Com } from '../../../types/coms';
import { getCurrentComById } from '../../../utils/getters/works'
import InputLabel from '@material-ui/core/InputLabel';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { updateCom } from '../../../actions/coms'

interface DispatchProps {
  updateCom: (id: number, com: Com) => void
}

interface OwnProps {
  currentCom: Com | undefined
}

type Props = DispatchProps & OwnProps

class Attribute extends React.Component<Props, any> {
  // constructor(props: Props) {
  //   super(props)
  // }

  updateTextContext = (e: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('context' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.context = e
      updateCom(currentCom.id, comCopy)
    }
  }

  updateBgColor = (e: RGBColor) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('backgroundColor' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.backgroundColor = `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`
      updateCom(currentCom.id, comCopy)
    }
  }

  updateFontSize = (fontSize: number) => {
    if (typeof fontSize !== 'number') {
      return
    }
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('fontSize' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.fontSize = fontSize
      updateCom(currentCom.id, comCopy)
    }
  }

  updateLetterSpacing = (letterSpacing: string) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom) {
      return
    }
    if ('letterSpacing' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.letterSpacing = letterSpacing
      updateCom(currentCom.id, comCopy)
    }
  }

  updateOpacity = (e: number) => {
    const { currentCom, updateCom } = this.props
    if (!currentCom || e > 1 || e < 0) {
      return
    }
    if ('letterSpacing' in currentCom) {
      let comCopy = { ...currentCom }
      comCopy.opacity = e
      updateCom(currentCom.id, comCopy)
    }
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
            <InputLabel>组件编号:  </InputLabel>
            <Input
              value={currentCom.id}
              disabled>
            </Input>
          </div>
          <div className={styles.attr}>
            <InputLabel>组件名称:  </InputLabel>
            <Input
              value={currentCom.name}
              disabled>
            </Input>
          </div>
          {('context' in currentCom) &&
            <div className={styles.attr}>
              <InputLabel>文本内容:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateTextContext(e.target.value)}
                value={currentCom.context}
              />
            </div>}
          {('backgroundColor' in currentCom) &&
            <div className={styles.attr}>
              <InputLabel>背景颜色:  </InputLabel>
              <SketchPicker
                color={currentCom.backgroundColor}
                onChangeComplete={e => {
                  this.updateBgColor(e.rgb)
                }}
              />
            </div>}
          {('path' in currentCom) &&
            <div className={styles.attr}>
              <InputLabel>Json路径:  </InputLabel>
              <Input
                value={currentCom.path}
                disabled>
              </Input>
            </div>}
          {('fontSize' in currentCom &&
            <div className={styles.attr}>
              <InputLabel>字体大小:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateFontSize(Number(e.target.value))}
                value={currentCom.fontSize}
              />
            </div>)}
          {('letterSpacing' in currentCom &&
            <div className={styles.attr}>
              <InputLabel>字体间距:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateLetterSpacing(e.target.value)}
                value={currentCom.letterSpacing}
              />
            </div>)
          }
          {('opacity' in currentCom &&
            <div className={styles.attr}>
              <InputLabel>透明度:  </InputLabel>
              <Input
                inputProps={{ maxLength: 12 }}
                onChange={e => this.updateOpacity(Number(e.target.value))}
                value={currentCom.opacity}
              >
              </Input>
            </div>)}
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

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    updateCom: (id: number, com: Com) => {
      dispatch(updateCom(id, com))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Attribute)