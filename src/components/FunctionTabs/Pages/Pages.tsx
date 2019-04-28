import * as React from 'react'
import { connect } from 'react-redux'
import IStoreState from '../../../types/IStoreState';
import { Pages as PagesType } from '../../../types/pages'

interface OwnProps {
  currentPages: PagesType
}

type Props = OwnProps

class Pages extends React.Component<Props> {

  render() {
    const bindStyles: React.CSSProperties = {
      textAlign: 'center',
      padding: '20px'
    }
    return <div style={bindStyles}>
      当前暂时只支持单页面
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const currentPages = state.work.pages
  return {
    currentPages
  }
}
export default connect(mapStateToProps)(Pages)