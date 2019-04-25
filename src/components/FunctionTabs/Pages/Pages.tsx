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
    return null
  }
}

const mapStateToProps = (state: IStoreState) => {
  const currentPages = state.work.pages
  return {
    currentPages
  }
}
export default connect(mapStateToProps)(Pages)