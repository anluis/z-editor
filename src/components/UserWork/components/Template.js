import React from 'react'
import Loadable from 'react-loadable'
import * as ModuleTypes from '@/constants/ModuleTypes'
import '@/assets/style/userPage.less'
import Loading from './common/Loading'
import Jump from '../services/utils/jump'

const LoadableImageComponent = Loadable({
  loader: () => import('./basic/Image'),
  loading: () => <Loading />
})

const LoadableBackgroundComponent = Loadable({
  loader: () => import('./basic/Background'),
  loading: () => <Loading />
})

const LoadableTextComponent = Loadable({
  loader: () => import('./basic/Text'),
  loading: () => <Loading />
})

const LoadableInputComponent = Loadable({
  loader: () => import('./basic/Input'),
  loading: () => <Loading />
})

const LoadableVideoComponent = Loadable({
  loader: () => import('./basic/Video'),
  loading: () => <Loading />
})

const LoadablePhotoComponent = Loadable({
  loader: () => import('./basic/Photo'),
  loading: () => <Loading />
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
        return (
          <ImageComponent
            key={index}
            {...context}
            onClick={Jump(context.attribute.link)}
          />
        )
      case ModuleTypes.BACKGROUND_MODULE:
        return (
          <Background
            key={index}
            {...context}
            onClick={Jump(context.attribute.link)}
          />
        )
      case ModuleTypes.TEXT_MODULE:
        return (
          <Text
            key={index}
            {...context}
            onClick={Jump(context.attribute.link)}
          />
        )
      case ModuleTypes.INPUT_MODULE:
        return (
          <Input
            key={index}
            {...context}
            onClick={Jump(context.attribute.link)}
          />
        )
      case ModuleTypes.VIDEO_MODULE:
        return (
          <Video
            key={index}
            {...context}
            onClick={Jump(context.attribute.link)}
          />
        )
      case ModuleTypes.PHOTO_MODULE:
        return (
          <Photo
            key={index}
            {...context}
            onClick={Jump(context.attribute.link)}
          />
        )
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
