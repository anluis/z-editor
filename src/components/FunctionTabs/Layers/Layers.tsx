import * as React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { connect } from 'react-redux'
import { Page } from '../../../types/pages'
import IStoreState from '../../../types/IStoreState';
import { getComsByCurrentPageId } from '../../../utils/getters/works'
import { Coms, Com } from '../../../types/coms';
import { Button } from '@material-ui/core';

interface Props {
  currentComs: Coms
  currentPageId: number
}

class Layers extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  onSortEnd = () => {

  }

  deleteCom = (id: number) => {

  }


  render() {
    const { currentComs } = this.props
    const SortableItem = SortableElement((item: Com) => {
      return <div className={styles.layeritem} style={extraStyle}>
        {item.name}
        <Button>Settings</Button>
        <Button onClick={() => this.deleteCom(item.id)}>Delete</Button>
      </div>
    })

    const SortableList = SortableContainer((currentComs: Coms) => {
      return (<div className="layers">
        {currentComs.map((value, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            item={value}
          />
        ))}
      </div>)
    })


    return null
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { currentPageId } = state.work.status
  return {
    currentComs: getComsByCurrentPageId(state),
    currentPageId
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layers)