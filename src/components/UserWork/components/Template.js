import React from 'react'
import Loadable from 'react-loadable'

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

class Template extends React.Component {
  render() {
    const { components } = this.props
    const allComponents = components.map((context, index) => {
      return this.renderComponent(context, index)
    })
    return <div>{allComponents}</div>
  }
}
