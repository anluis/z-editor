import * as React from 'react'
import templates from '../../../apis/templates/templates'
import IStoreState from '../../../types/IStoreState';
import { connect } from 'react-redux'
import styles from './Templates.module.css'
import { Pagination } from 'antd';
import 'antd/lib/pagination/style/css';

interface OwnProps {
  accessToken: string
}

type Props = OwnProps

class Templates extends React.Component<Props> {
  componentDidMount() {
    const { accessToken } = this.props
    const args = {
      Authorization: 'Bearer ' + accessToken,
      page: 1,
      perPage: 10
    }
    templates(args).then(r => {
      console.dir(r)
    })
  }
  render() {
    return <div className={styles.templates}>
      <Pagination />
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { accessToken } = state.auth
  return {
    accessToken
  }
}



export default connect(mapStateToProps)(Templates)