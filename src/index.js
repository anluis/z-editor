import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store/configStore'
import Root from './Root'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
