import * as React from 'react'
import styles from './Editor.module.css'
import TopBar from '../../components/TopBar/TopBar';
import { Route } from 'react-router-dom';
import MenuBar from '../../components/MenuBar/MenuBar';
const PlayGround = React.lazy(() => import('./Playground/Playground'))
const Material = React.lazy(() => import('./Material/Material'))
const Works = React.lazy(() => import('./Works/Works'))
const Templates = React.lazy(() => import('./Templates/Templates'))

class Editor extends React.Component {
  render() {
    return <div className={styles.main}>
      <div className={styles.topbar}>
        <TopBar />
      </div>
      <div className={styles.playground}>
        <MenuBar />
        <div className={styles.create}>
          <Route path="/editor" component={PlayGround} exact />
          <Route path="/editor/material/" component={Material} />
          <Route path="/editor/works/" component={Works} />
          <Route path="/editor/templates" component={Templates} />
        </div>
      </div>
    </div>
  }
}

export default Editor