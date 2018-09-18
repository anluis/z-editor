import React from 'react'
import Template from './components/Template'
import data from './mockData'
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
    const res = data
    this.setState({
      mywork: res.results[0],
      loading: false
    })
  }
  render() {
    const { loading, mywork } = this.state
    let comList,
      pageList = []
    if (!loading) {
      comList = mywork.comList
      pageList = mywork.pageList[0]
    }

    return loading ? (
      <div>loading</div>
    ) : (
      <Template comList={comList} pageList={pageList} />
    )
  }
}

export default UserWork
