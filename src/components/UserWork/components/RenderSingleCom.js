import React from 'react'

class RenderSingleCom extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  render() {
    const url = './' + this.props.type
    let module
    import(url)
      .then(r => {
        module = r
      })
      .catch(err => {
        console.warn(err.message)
      })
    return <div>{module}</div>
  }
}

export default RenderSingleCom
