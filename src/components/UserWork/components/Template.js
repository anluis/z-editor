import React from 'react'
import Loadable from 'react-loadable'
import * as ModuleTypes from '../../../constants/ModuleTypes'
import '../../../assets/style/userPage.less'

const LoadableImageComponent = Loadable({
  loader: () => import('./basic/Image'),
  loading: () => <div>Loading...</div>
})

const LoadableBackgroundComponent = Loadable({
  loader: () => import('./basic/Background'),
  loading: () => <div>Loading</div>
})

const LoadableTextComponent = Loadable({
  loader: () => import('./basic/Text'),
  loading: () => <div>Loading</div>
})

const LoadableInputComponent = Loadable({
  loader: () => import('./basic/Input'),
  loading: () => <div>Loading</div>
})

const LoadableVideoComponent = Loadable({
  loader: () => import('./basic/Video'),
  loading: () => <div>Loading</div>
})

const LoadablePhotoComponent = Loadable({
  loader: () => import('./basic/Photo'),
  loading: () => <div>Loading</div>
})

const ImageComponent = context => <LoadableImageComponent {...context} />

const Background = context => <LoadableBackgroundComponent {...context} />

const Text = context => <LoadableTextComponent {...context} />

const Input = context => <LoadableInputComponent {...context} />

const Video = context => <LoadableVideoComponent {...context} />

const Photo = context => <LoadablePhotoComponent {...context} />

class Template extends React.Component {
  renderComponent(context, index) {
    switch (context.attribute.type) {
      case ModuleTypes.IMG_MODULE:
        return <ImageComponent key={index} {...context} />
      case ModuleTypes.BACKGROUND_MODULE:
        return <Background key={index} {...context} />
      case ModuleTypes.TEXT_MODULE:
        return <Text key={index} {...context} />
      case ModuleTypes.INPUT_MODULE:
        return <Input key={index} {...context} />
      case ModuleTypes.VIDEO_MODULE:
        return <Video key={index} {...context} />
      case ModuleTypes.PHOTO_MODULE:
        return <Photo key={index} {...context} />
      default:
        return null
    }
  }

  handleWorkSettings(s) {
    document.title = s.settings.payload.name
  }

  render() {
    const sortByOrder = (items: Array<any>, order: Array<number>) => {
      let result = []
      order.forEach(e => {
        let r = items.find(item => item.id === e)
        if (r !== undefined) {
          result.push(r)
        }
      })
      return result
    }
    const { comList, pageList } = this.props
    const allComponents = sortByOrder(comList, pageList.order)
    const renderComponents = allComponents.map((context, index) => {
      return this.renderComponent(context, index)
    })
    const bindStyle = {
      height: window.innerHeight,
      width: '100%'
    }
    // set workSettings
    this.handleWorkSettings(pageList)
    return (
      <div style={bindStyle} className="user-root">
        {renderComponents}
      </div>
    )
  }
}

export default Template
