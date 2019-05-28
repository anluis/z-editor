import * as React from 'react'
import styles from './InContainerAdd.module.css'
import TextField from '@material-ui/core/TextField';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { getQiniuToken, saveUploadResult } from '../../../apis/upload/qiniu'
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import * as qiniu from 'qiniu-js'
import { materialsPost } from '../../../apis/materials/materials';
import materialTypeByValue from '../../../utils/helper/typeReturner/materialTypeByValue';
import { ThunkDispatch } from 'redux-thunk';
import { setLoading } from '../../../actions/status';
import { connect } from 'react-redux';
const moment = require('moment')

const mStyles = (theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 500
    }
  })

interface OwnProps {
  classes: any
  materialCurrentValue: number
  handleMaterialChooseAndFresh: () => void
}

interface DispatchProps {
  setLoading: (status: boolean) => void
}

type Props = OwnProps & DispatchProps

interface State {
  imgName: string
  videoName: string
  imgPreviewUrl: string
  imgNameError: string
  videoError: string
  videoPreviewUrl: string
  lottieName: string
  lottieNameError: string
  lottieUrls: Array<string>
  lottieCoverUrl: string
  lottiePath: string
  lottiePathError: string
  lottieJsonUrl: string
  lottieJsonError: string
}

class InContainerAdd extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      imgName: '',
      videoName: '',
      imgPreviewUrl: '',
      imgNameError: '',
      videoError: '',
      videoPreviewUrl: '',
      lottieName: '',
      lottieCoverUrl: '',
      lottieUrls: [],
      lottieNameError: '',
      lottiePath: '',
      lottiePathError: '',
      lottieJsonUrl: '',
      lottieJsonError: ''
    }
  }

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    this.setState({ [name]: event.target.value } as Pick<State, keyof State>)
  };

  handleSubmitImage = async () => {
    const { imgName, imgPreviewUrl } = this.state
    const { materialCurrentValue, handleMaterialChooseAndFresh } = this.props
    const type = materialTypeByValue(materialCurrentValue)
    if (imgName === '' || type === null) {
      this.setState({
        imgNameError: 'error'
      })
      return
    }
    const materialArgs = {
      name: imgName,
      type: type,
      imgUrl: imgPreviewUrl
    }
    try {
      this.props.setLoading(true)
      await materialsPost(materialArgs)
      handleMaterialChooseAndFresh()
      this.props.setLoading(false)
    } catch (err) {
      handleAxiosAsyncError(err)
      this.props.setLoading(false)
    }
  }

  handleSubmitVideo = async () => {
    const { videoName, videoPreviewUrl, imgPreviewUrl } = this.state
    const { materialCurrentValue, handleMaterialChooseAndFresh } = this.props
    const type = materialTypeByValue(materialCurrentValue)
    if (videoName === '' || type === null || imgPreviewUrl === '' || videoPreviewUrl === '') {
      this.setState({
        imgNameError: 'error'
      })
      return
    }
    const materialArgs = {
      name: videoName,
      type: type,
      imgUrl: imgPreviewUrl,
      videoUrl: videoPreviewUrl
    }
    try {
      await materialsPost(materialArgs)
      handleMaterialChooseAndFresh()
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  handleImageInputUpLoad = async (e: any) => {
    try {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      this.props.setLoading(true)
      const { name } = file
      const time = moment().unix()
      const suffix = `${time}-${name}`
      const key = encodeURI(`${suffix}`)
      const qiniuToken: any = await getQiniuToken()
      const putExtra = {
        fname: file.name,
        params: {},
        mimeType: ["image/png", "image/jpeg", "image/jpg"]
      }
      const config = {
        useCdnDomain: true
      }
      const observable = qiniu.upload(file, key, qiniuToken.data, putExtra, config)
      const that = this
      const observer = {
        next(res: any) {
        },
        error(err: any) {
          that.props.setLoading(false)
        },
        complete(res: any) {
          const uploadArgs = {
            size: file.size,
            name: res.hash,
            key: res.key
          }
          saveUploadResult(uploadArgs).then((r: any) => {
            that.setState({
              imgPreviewUrl: r.data.url
            })
            that.props.setLoading(false)

          }).catch(e => {
            handleAxiosAsyncError(e)
            that.props.setLoading(false)

          })
        }
      }
      const subscription = observable.subscribe(observer)
    } catch (err) {
      handleAxiosAsyncError(err)
      this.props.setLoading(false)
    }
  }

  handleLottieCoverUpload = async (e: any) => {
    try {
      // console.log(e.target.files[0])
      const file = e.target.files[0]
      if (!file) {
        return
      }
      this.props.setLoading(true)
      const { name } = file
      const time = moment().unix()
      const suffix = `${time}-${name}`
      const key = encodeURI(`${suffix}`)
      const qiniuToken: any = await getQiniuToken()
      const putExtra = {
        fname: file.name,
        params: {},
        mimeType: ["image/png", "image/jpeg", "image/jpg"]
      }
      const config = {
        useCdnDomain: true
      }
      const observable = qiniu.upload(file, key, qiniuToken.data, putExtra, config)
      const that = this
      const observer = {
        next(res: any) {
        },
        error(err: any) {
          that.props.setLoading(false)
        },
        complete(res: any) {
          const uploadArgs = {
            size: file.size,
            name: res.hash,
            key: res.key
          }
          saveUploadResult(uploadArgs).then((r: any) => {
            that.setState({
              lottieCoverUrl: r.data.url
            })
            that.props.setLoading(false)

          }).catch(e => {
            handleAxiosAsyncError(e)
            that.props.setLoading(false)

          })
        }
      }
      const subscription = observable.subscribe(observer)
    } catch (err) {
      handleAxiosAsyncError(err)
      this.props.setLoading(false)
    }
  }

  handleVideoInputUpload = async (e: any) => {
    try {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      this.props.setLoading(true)
      const { name } = file
      const time = moment().unix()
      const suffix = `${time}-${name}`
      const key = encodeURI(`${suffix}`)
      const qiniuToken: any = await getQiniuToken()
      const putExtra = {
        fname: file.name,
        params: {},
        mimeType: ["video/mp4"]
      }
      const config = {
        useCdnDomain: true
      }
      const observable = qiniu.upload(file, key, qiniuToken.data, putExtra, config)
      const that = this
      const observer = {
        next(res: any) {
        },
        error(err: any) {
          that.props.setLoading(false)
        },
        complete(res: any) {
          const uploadArgs = {
            size: file.size,
            name: res.hash,
            key: res.key
          }
          saveUploadResult(uploadArgs).then((r: any) => {
            that.setState({
              videoPreviewUrl: r.data.url
            })
            that.props.setLoading(false)
          }).catch(e => {
            handleAxiosAsyncError(e)
          })
        }
      }
      const subscription = observable.subscribe(observer)
    } catch (err) {
      handleAxiosAsyncError(err)
      this.props.setLoading(false)
    }
  }

  handleLottieJsonUpload = async (e: any) => {
    try {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      this.props.setLoading(true)
      const { name } = file
      const time = moment().unix()
      const suffix = `${time}-${name}`
      const key = encodeURI(`${suffix}`)
      const qiniuToken: any = await getQiniuToken()
      const putExtra = {
        fname: file.name,
        params: {},
        mimeType: ["application/json"]
      }
      const config = {
        useCdnDomain: true
      }
      const observable = qiniu.upload(file, key, qiniuToken.data, putExtra, config)
      const that = this
      const observer = {
        next(res: any) {
        },
        error(err: any) {
          that.props.setLoading(false)
        },
        complete(res: any) {
          const uploadArgs = {
            size: file.size,
            name: res.hash,
            key: res.key
          }
          saveUploadResult(uploadArgs).then((r: any) => {
            that.setState({
              lottieJsonUrl: r.data.url
            })
            that.props.setLoading(false)
          }).catch(e => {
            handleAxiosAsyncError(e)
            that.props.setLoading(false)
          })
        }
      }
      const subscription = observable.subscribe(observer)
    } catch (err) {
      handleAxiosAsyncError(err)
      this.props.setLoading(false)
    }
  }

  handleSubmitLottie = async () => {
    const { lottieName, lottiePath, lottieJsonUrl, lottieCoverUrl } = this.state
    if (lottieName === '') {
      this.setState({
        lottieNameError: 'error'
      })
      return
    }

    if (lottiePath === '') {
      this.setState({
        lottiePathError: 'error'
      })
      return
    }

    if (lottieJsonUrl === '') {
      this.setState({
        lottieJsonError: 'error'
      })
      return
    }
    const { materialCurrentValue, handleMaterialChooseAndFresh } = this.props
    const type = materialTypeByValue(materialCurrentValue)
    const materialArgs = {
      name: lottieName,
      type: type,
      imgUrl: lottieCoverUrl,
      path: lottieJsonUrl,
      assetsPath: lottiePath
    }
    try {
      await materialsPost(materialArgs)
      handleMaterialChooseAndFresh()
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  handleMultiLottieMaterialsUpload = async (e: any) => {
    for (const item of e.target.files) {
      await this.hanldeSingleLottieMaterialUpload(item)
    }
  }

  hanldeSingleLottieMaterialUpload = async (e: any) => {

  }
  // handleLottieImgsUpload = async (e: any) => {

  // }

  render() {
    const {
      classes,
      materialCurrentValue
    } = this.props
    const {
      imgPreviewUrl,
      imgNameError,
      videoError,
      videoPreviewUrl,
      lottieNameError,
      lottiePathError,
      lottieJsonUrl,
      lottieCoverUrl,
      lottieJsonError
    } = this.state
    return <div className={styles.containeradd}>
      {materialCurrentValue === 0 &&
        <>
          <TextField
            id="image-name"
            label="图片名称"
            className={classes.textField}
            value={this.state.imgName}
            onChange={this.handleChange('imgName')}
            margin="normal"
            autoFocus
            error={imgNameError === 'error'}
          />
          <input
            className={styles.imginput}
            onChange={e => this.handleImageInputUpLoad(e)}
            accept="image/*"
            id="img-upload"
            type="file"
          />
          {
            imgPreviewUrl !== ''
            &&
            <img src={imgPreviewUrl} className={styles.previewimg} />
          }
          <label htmlFor="img-upload">
            <Button variant="contained" component="span">上传</Button>
          </label>
          <Button variant="contained" color="primary" onClick={this.handleSubmitImage}>提交</Button>
        </>}

      {materialCurrentValue === 1 &&
        <>
          <TextField
            id="video-name"
            label="视频名称"
            className={classes.textField}
            value={this.state.videoName}
            onChange={this.handleChange('videoName')}
            margin="normal"
            autoFocus
            error={videoError === 'error'}
          />
          <input
            className={styles.imginput}
            onChange={e => this.handleVideoInputUpload(e)}
            accept="video/*"
            id="video-upload"
            type="file"
          />
          {videoPreviewUrl !== '' && <>已上传视频: {videoPreviewUrl}</>}
          <label htmlFor="video-upload">
            <Button variant="contained" component="span">点击上传视频</Button>
          </label>

          <input
            className={styles.imginput}
            onChange={e => this.handleImageInputUpLoad(e)}
            accept="image/*"
            id="img-upload"
            type="file"
          />
          {
            imgPreviewUrl !== ''
            &&
            <img src={imgPreviewUrl} className={styles.previewimg} />
          }
          <label htmlFor="img-upload">
            <Button variant="contained" component="span">点击上传视频封面</Button>
          </label>
          <Button variant="contained" color="primary" onClick={this.handleSubmitVideo}>提交</Button>
        </>
      }

      {
        materialCurrentValue === 2 &&
        <>
          <TextField
            id="lottie-name"
            label="Lottie动画素材"
            className={classes.textField}
            disabled
            value={'动画素材请从七牛上传到一个文件目录，然后填写文件目录到下方'}
            margin="normal"
            autoFocus
          />
          <TextField
            id="lottie-name"
            label="Lottie动画名称"
            className={classes.textField}
            value={this.state.lottieName}
            onChange={this.handleChange('lottieName')}
            margin="normal"
            autoFocus
            error={lottieNameError === 'error'}
          />
          <TextField
            id="lottie-path-name"
            label="Lottie动画文件目录"
            className={classes.textField}
            value={this.state.lottiePath}
            onChange={this.handleChange('lottiePath')}
            margin="normal"
            error={lottiePathError === 'error'}
          />

          <TextField
            id="lottie-json-url"
            label="Lottie动画Json链接"
            className={classes.textField}
            value={this.state.lottieJsonUrl}
            onChange={this.handleChange('lottieJsonUrl')}
            margin="normal"
            error={lottieJsonError === 'error'}
          />

          <input
            className={styles.imginput}
            onChange={e => this.handleLottieCoverUpload(e)}
            accept="image/*"
            id="lottie-cover-upload"
            type="file"
          />

          <label htmlFor="lottie-cover-upload">
            <Button variant="contained" component="span">点击上传Lottie动画封面</Button>
          </label>

          <input
            className={styles.imginput}
            onChange={e => this.handleLottieJsonUpload(e)}
            accept=".json"
            id="lottie-json"
            type="file"
          />
          <label htmlFor="lottie-json">
            <Button variant="contained" component="span">点击上传Lottie动画Json</Button>
          </label>

          {
            lottieCoverUrl !== ''
            &&
            <img src={lottieCoverUrl} className={styles.previewimg} />
          }
          <Button variant="contained" component="span" onClick={this.handleSubmitLottie}>提交</Button>

          {/* <input
            className={styles.imginput}
            onChange={e => this.handleLottieImgsUpload(e)}
            accept="image/*"
            id="lottie-imgs-upload"
            type="file"
            multiple
          />
          <label htmlFor="lottie-imgs-upload">
            <Button variant="contained" component="span">点击上传Lottie动画图片素材</Button>
          </label> */}
        </>
      }
    </div>
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setLoading: (status: boolean) => {
      dispatch(setLoading(status))
    }
  }
}

export default connect(null, mapDispatchToProps)(withStyles(mStyles)(InContainerAdd))