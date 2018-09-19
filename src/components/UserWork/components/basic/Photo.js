import React from 'react'
import { getInfoById } from '../../services'
import queryString from 'query-string'

class Photo extends React.Component {
  constructor() {
    super()
    this.state = {
      imgUrl: '',
      loading: true
    }
  }

  async componentDidMount() {
    const values = queryString.parse(window.location.search)
    const photoId = values.id
    const { image } = await getInfoById(photoId)
    this.setState({
      imgUrl: image,
      loading: false
    })
  }
  render() {
    const { attribute } = this.props
    let loading = this.state.loading
    let inStyle = {
      width: '100%',
      height: '100%',
      background: attribute.background,
      animationName: attribute.animationName,
      animationDuration: attribute.animationDuration + 's',
      animationDelay: attribute.animationDelay + 's',
      animationIterationCount: attribute.animationIterationCount,
      backgroundImage: `url("` + this.state.imgUrl + `")`,
      backgroundSize: 'cover',
      border: 'solid 1px #ddd',
      color: attribute.color,
      opacity: attribute.opacity,
      borderWidth: attribute.borderWidth + 'px',
      borderColor: attribute.borderColor,
      borderStyle: attribute.borderStyle,
      borderRadius: attribute.borderRadius + 'px',
      textAlign: attribute.textAlign,
      wordWrap: attribute.wordWrap,
      fontSize: attribute.fontSize + 'px',
      lineHeight: attribute.lineHeight,
      letterSpacing: attribute.letterSpacing + 'em',
      wordBreak: 'break-all'
    }
    const outStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      width: attribute.width + 'px',
      height: attribute.height + 'px',
      position: 'absolute',
      left: (attribute.x / 375) * window.innerWidth + 'px',
      top: (attribute.y / 667) * window.innerHeight + 'px'
    }

    return loading ? null : (
      <div style={outStyle}>
        <div style={inStyle} />
      </div>
    )
  }
}

export default Photo
