import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
const EditorIndex = lazy(() => import('../../containers/Editor/Index/Index'))

class Editor extends React.Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Route path="/editor" component={EditorIndex} excat />
      </Suspense>
    )
  }
}

export default Editor