import React from 'react'
import Loadable from 'react-loadable'
import * as types from '../constants/ActionTypes'

const LoadableImageComponent = Loadable({
  loader: () => import('../basic/Image'),
  loading: () => <div>Loading...</div>
})

const LoadableBackgroundComponent = Loadable({
  loader: () => import('../basic/Background'),
  loading: () => <div>Loading</div>
})

const LoadableTextComponent = Loadable({
  loader: () => import('../basic/Text'),
  loading: () => <div>Loading</div>
})

const LoadableInputComponent = Loadable({
  loader: () => import('../basic/Input'),
  loading: () => <div>Loading</div>
})

const LoadableVedioComponent = Loadable({
  loader: () => import('../basic/Vedio'),
  loading: () => <div>Loading</div>
})

const LoadablePhotoComponent = Loadable({
  loader: () => import('../basic/Photo'),
  loading: () => <div>Loading</div>
})

const ImageComponent = context => <LoadableImageComponent {...context} />

const Background = context => <LoadableBackgroundComponent {...context} />

const Text = context => <LoadableTextComponent {...context} />

const Input = context => <LoadableInputComponent {...context} />

const Video = context => <LoadableVedioComponent {...context} />

const Photo = context => <LoadablePhotoComponent {...context} />

class Template extends React.Component {
  renderComponent(context, index) {
    switch (context.type) {
      case types.IMG_MODULE:
        return <ImageComponent key={index} {...context} />
      case types.BACKGROUND_MODULE:
        return <Background key={index} {...context} />
      case types.TEXT_MODULE:
        return <Text key={index} {...context} />
      case types.INPUT_MODULE:
        return <Input key={index} {...context} />
      case types.VIDEO_MODULE:
        return <Video key={index} {...context} />
      case types.Photo:
        return <Photo key={index} {...context} />
      default:
        return null
    }
  }
  render() {
    const { components } = this.props
    const allComponents = components.map((context, index) => {
      return this.renderComponent(context, index)
    })
    return <div>{allComponents}</div>
  }
}

export default Template
