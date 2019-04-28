import * as React from 'react'
import materials from '../../../apis/materials/materials'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'

interface OwnProps {
  accessToken: string
}

type Props = OwnProps

class Materials extends React.Component<Props> {
  componentDidMount() {
    const { accessToken } = this.props
    const args = {
      Authorization: 'Bearer ' + accessToken,
      page: 1,
      perPage: 10
    }
    materials(args).then(r => {
      console.dir(r)
    })
  }
  render() {
    return null
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { accessToken } = state.auth
  return {
    accessToken
  }
}



export default connect(mapStateToProps)(Materials)