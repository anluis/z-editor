import * as React from 'react'
import { Route } from 'react-router-dom';
const RenderWork = React.lazy(() => import('./RenderWork/RenderWork'))

class Work extends React.Component {
  render() {
    return (
      <React.Suspense fallback={null}>
        <Route path='/work/:id/:page' component={RenderWork} />
      </React.Suspense>
    )
  }
}

export default Work