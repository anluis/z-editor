import * as React from 'react'
import styles from './Editor.module.css'
import TopBar from '../../components/TopBar/TopBar';
import { Route, Redirect } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import IStoreState from '../../types/IStoreState';

const PlayGround = React.lazy(() => import('./Playground/Playground'))
const Material = React.lazy(() => import('./Material/Material'))
const Works = React.lazy(() => import('./Works/Works'))
const Templates = React.lazy(() => import('./Templates/Templates'))

interface OwnProps extends RouteComponentProps {
  isLoading: boolean
  isAuthenticated: boolean
}

type Props = OwnProps

class Editor extends React.Component<Props> {
  render() {
    const { isAuthenticated } = this.props
    if (!isAuthenticated) {
      return <Redirect to='/login' />
    }
    return <div className={styles.main}>
      <MenuBar />
      <Route path="/editor" component={PlayGround} exact />
      {/* <Route path="/editor/material/" component={Material} />
      <Route path="/editor/works/" component={Works} />
      <Route path="/editor/templates" component={Templates} /> */}
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { isAuthenticated } = state.auth
  const { isLoading } = state.status
  return {
    isAuthenticated,
    isLoading
  }
}

export default connect(mapStateToProps)(Editor)