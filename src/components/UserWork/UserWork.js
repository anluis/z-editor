import React from 'react'
import axios from 'axios'
import Template from './components/Template'

class UserWork extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      coms: null
    }
  }
  async componentDidMount() {
    // get work by url search
    console.dir(this.props.location)
    const getUrl = 'http://exelook.com/client/goodsxsd/?'
    const getParam = {}
    const res = await axios.get(getUrl, {
      params: { ...getParam }
    })
    this.setState({
      coms: res,
      loading: false
    })
  }
  render() {
    const { loading, coms } = this.state

    return loading ? <div>loading</div> : <Template components={coms} />
  }
}

export default UserWork
