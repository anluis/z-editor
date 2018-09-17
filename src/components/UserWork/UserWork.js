import React from 'react'
import axios from 'axios'
import Template from './components/Template'

class UserWork extends React.Component {
  constructor() {
    super()
    this.state = {
      mywork: null,
      loading: true
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
      mywork: res,
      loading: false
    })
  }
  render() {
    const { loading, mywork } = this.state

    const comList = mywork.comList
    const pageList = mywork.pageList

    return loading ? (
      <div>loading</div>
    ) : (
      <Template comList={comList} pageList={pageList} />
    )
  }
}

export default UserWork
