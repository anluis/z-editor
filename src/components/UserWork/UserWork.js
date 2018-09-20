import React from 'react'
import Template from './components/Template'
import queryString from 'query-string'
import Axios from 'axios'
import { $wechat, isInWechat } from './services/index'

class UserWork extends React.Component {
  constructor() {
    super()
    this.state = {
      mywork: null,
      loading: true
    }
  }

  handleWechatShare = () => {
    if (isInWechat() === true) {
      $wechat()
        .then(res => {
          res.share(this.wxShareInfoValue)
        })
        .catch(err => {
          console.warn(err.message)
        })
    }
  }

  async componentDidMount() {
    // get work by url search
    const values = queryString.parse(this.props.location.search)
    const obj = {
      objectId: values.wid
    }
    const url = '' + JSON.stringify(obj)
    const rq_header = {
      headers: {}
    }
    Axios.get(url, rq_header).then(r => {
      this.setState({
        mywork: r.data.results[0],
        loading: false
      })
    })

    this.handleWechatShare()
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
