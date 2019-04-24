import * as React from 'react'
import styles from './TopBar.module.css'
import { Button } from '@material-ui/core'
import IStoreState from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk'
import { redo, undo } from '../../actions/status'
import { connect } from 'react-redux'
import { addCom } from '../../actions/coms'
import { Com } from '../../types/coms'
import { topBarItem, topBarSettings } from '../../constants/topBar'
import { TEXT, initText } from '../../constants/coms';

interface OwnProps {
  currentPageId: number
  comsLength: number
}

interface DispatchProps {
  redo: () => void
  undo: () => void
  addCom: (id: number, com: Com) => void
}

type Props = DispatchProps & OwnProps

class TopBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  undo = () => {

  }

  redo = () => {

  }

  publish = () => {

  }

  handleAddCom = (type: string) => {
    const { currentPageId, comsLength, addCom } = this.props
    switch (type) {
      case TEXT:
        const newText = {
          ...initText,
          name: `Text-${comsLength + 1}`,
          id: comsLength,
        }
        addCom(currentPageId, newText)
      default:
        return
    }
  }



  render() {
    const renderItem = (item: topBarItem, index: number) => {
      return <div key={index} className={styles.fitem} onClick={() => this.handleAddCom(item.type)}>
        {item.name}
        <img className={styles.icon} src={item.imgUrl} />
      </div>

    }
    const renderItems = topBarSettings.map((item, index) => {
      return (renderItem(item, index))
    })

    return (
      <>
        <div className={styles.head}>
          <Button variant="contained" color="primary" onClick={() => this.undo}>Undo</Button>
          <Button variant="contained" color="primary" onClick={() => this.undo}>Redo</Button>
        </div>

        <div className={styles.functions}>
          {renderItems}
        </div>

        <div className={styles.publish}>
          <Button
            variant="contained" color="primary"
            onClick={() => this.publish}
            className={styles.publishbt}>
            Publish
          </Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { currentComId, currentPageId } = state.status
  const comsLength = state.work.coms.length
  return {
    currentComId,
    currentPageId,
    comsLength
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    redo: () => {
      dispatch(redo())
    },
    undo: () => {
      dispatch(undo())
    },
    addCom: (id: number, com: Com) => {
      dispatch(addCom(id, com))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)