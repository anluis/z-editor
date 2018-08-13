// @flow
import React from 'react'
import { Pagination } from 'antd'

type Props = {
  isFetching: boolean,
  works: Array<Object>,
  fetchWorks: (page: number) => void,
  pageSize: number,
  currentPage: number
}

class WorkManage extends React.Component<Props> {
  render() {
    return (
      <div className="menu-inner">
        <div className="work-list">
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
          <div className="work-item">WorkManage</div>
        </div>
        <div className="work-pagination">
          <Pagination
            size="small"
            total={50}
            current={this.props.currentPage}
            onChange={page => {
              console.log(page)
            }}
          />
        </div>
      </div>
    )
  }
}

export default WorkManage
