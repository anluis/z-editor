import * as React from 'react'
const queryString = require('query-string')
import { PhotoGetCom } from '../../types/coms';
import goodsxsd from '../../apis/common/goodsxsd'
// interface OwnProps extends RouteComponentProps {

// }
interface Props extends PhotoGetCom {
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
    const { width, height } = this.props
    const { imgUrl } = this.state
    const bindStyle = {
      width: width + 'px',
      height: height + 'px',
      backgroundImage: `url("` + imgUrl + `")`,
    }
    if (!this.state.imgUrl) {
      return null
    }
    return <div style={bindStyle}>

    </div>
  }
}

export default PhotoGet