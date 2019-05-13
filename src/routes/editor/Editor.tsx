import * as React from 'react'
import styles from './Editor.module.css'
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import IStoreState from '../../types/IStoreState';

const MenuBar = React.lazy(() => import('../../components/MenuBar/MenuBar'))
const BasicDialog = React.lazy(() => import('../../components/Dialogs/BasicDialog/BasicDialog'))
const PlayGround = React.lazy(() => import('./Playground/Playground'))
const Materials = React.lazy(() => import('./Materials/Materials'))
const Works = React.lazy(() => import('./Works/Works'))
const Templates = React.lazy(() => import('./Templates/Templates'))
const FullScreenMaterialDialog = React.lazy(() => import('../../components/Dialogs/MaterialFullScreen'))
const PageSettingDialog = React.lazy(() => import('../../components/Dialogs/PageSettingDialog'))

interface OwnProps extends RouteComponentProps {
  isLoading: boolean
  isAuthenticated: boolean
}

type Props = OwnProps

class Editor extends React.Component<Props> {
  render() {
    document.title = 'H5 编辑器'
    const { isAuthenticated } = this.props
    if (!isAuthenticated) {
      return <Redirect to='/login' />
    }
    return <div className={styles.main}>
      <React.Suspense fallback={null}>
        <MenuBar />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <Route path="/editor" exact component={PlayGround} />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <Route path="/editor/materials" component={Materials} />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <Route path="/editor/works" component={Works} />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <Route path="/editor/templates" component={Templates} />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <FullScreenMaterialDialog />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <PageSettingDialog />
      </React.Suspense>
      <React.Suspense fallback={null}>
        <BasicDialog />
      </React.Suspense>
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { isAuthenticated } = state.auth
  const { isLoading } = state.status.present
  return {
    isAuthenticated,
    isLoading
  }
}

export default connect(mapStateToProps)(Editor)