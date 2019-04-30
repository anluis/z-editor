import * as React from 'react'
import styles from './Editor.module.css'
import { Route, Redirect } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import IStoreState from '../../types/IStoreState';
import FullScreenMaterialDialog from '../../components/Dialogs/FullScreen'

const PlayGround = React.lazy(() => import('./Playground/Playground'))
const Materials = React.lazy(() => import('./Materials/Materials'))
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
      <FullScreenMaterialDialog />
      <MenuBar />
      <React.Suspense fallback={null}>
        <Route path="/editor" exact component={PlayGround} />
        <Route path="/editor/materials" component={Materials} />
        <Route path="/editor/works" component={Works} />
        <Route path="/editor/templates" component={Templates} />
      </React.Suspense>

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