import React from 'react'
import axios from 'axios'

class UserWork extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      coms: null
    }
  }
  async componentDidMount() {
    console.dir(this.props.location)
    const res = await axios.get(
      'http://exelook.com/client/goodsxsd/?id=1056444&mobile=13056565656&api=json'
    )
    this.setState({
      coms: res,
      loading: false
    })
  }
  render() {
    const { loading, coms } = this.state

    return loading ? <div>loading</div> : <div> WorkPage</div>
  }
}

export default UserWork
