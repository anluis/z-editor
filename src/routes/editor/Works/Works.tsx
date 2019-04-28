import * as React from 'react'
import works from '../../../apis/works/works'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'

interface OwnProps {
  accessToken: string
}

type Props = OwnProps

class Works extends React.Component<Props> {
  componentDidMount() {
    const { accessToken } = this.props
    const args = {
      Authorization: 'Bearer ' + accessToken,
      page: 1,
      perPage: 10
    }
    works(args).then(r => {
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



export default connect(mapStateToProps)(Works)