import * as React from 'react'
const queryString = require('query-string')
import { PhotoGetCom } from '../../types/coms';
import goodsxsd from '../../apis/common/goodsxsd'
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends PhotoGetCom, RouteComponentProps {
  mode?: string
}

interface OwnState {
  imgUrl: string | null
}

type State = OwnState

class PhotoGet extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      imgUrl: null
    }
  }
  componentDidMount() {
    this.fetchPhoto()
  }

  fetchPhoto = async () => {
    const { id } = queryString.parse(this.props.location.search)
    if (!id) {
      return
    }
    try {
      const res = await goodsxsd(id)
      if (res && res.image) {
        this.setState({
          imgUrl: res.image
        })
      }
    } catch (e) {
      console.warn(e.message)
    }
  }

  render() {
    const { width, height, filter } = this.props
    const { imgUrl } = this.state
    const bindStyle = {
      width: width + 'px',
      height: height + 'px',
      backgroundImage: `url("` + imgUrl + `")`,
    }
    const bindStyleNotWithImg = {
      width: width + 'px',
      height: height + 'px',
      background: 'gray',
      filter: filter,
      display: 'flex',
      justifyContext: 'center',
      alignItems: 'center'
    }
    if (!this.state.imgUrl) {
      return <div style={bindStyleNotWithImg}>
        <div>提取的照片将会出现在这里</div>
        <div>照片比例为 {width} * {height}</div>
      </div>
    }
    return <div style={bindStyle}>

    </div>
  }
}

export default withRouter(PhotoGet)