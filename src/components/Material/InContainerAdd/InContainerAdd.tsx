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
const moment = require('moment')

const mStyles = (theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
  })

interface Props {
  classes: any
  materialCurrentValue: number
  handleMaterialChooseAndFresh: () => void
}

interface State {
  name: string
  imgPreviewUrl: string
  imgNameError: string
}

class InContainerAdd extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      name: '',
      imgPreviewUrl: '',
      imgNameError: ''
    }
  }

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: event.target.value } as Pick<State, keyof State>);
  };

  handleImageUpload = async () => {
    try {
      const qiniuToken: any = await getQiniuToken()
      console.log(qiniuToken.data.data)
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  handleSubmit = async () => {
    const { name, imgPreviewUrl } = this.state
    const { materialCurrentValue, handleMaterialChooseAndFresh } = this.props
    const type = materialTypeByValue(materialCurrentValue)
    if (name === '') {
      this.setState({
        imgNameError: 'error'
      })
      return
    }
    if (type === null) {
      return
    }
    const materialArgs = {
      name: name,
      type: type,
      imgUrl: imgPreviewUrl
    }
    try {
      const uploadMaterial = await materialsPost(materialArgs)
      handleMaterialChooseAndFresh()
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  handleInputUpLoad = async (e: any) => {
    try {
      console.log(e.target.files[0])
      const file = e.target.files[0]
      if (!file) {
        return
      }
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
          }).catch(e => {
            handleAxiosAsyncError(e)
          })
        }
      }
      const subscription = observable.subscribe(observer)

    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  render() {
    const { classes, materialCurrentValue } = this.props
    const { imgPreviewUrl, imgNameError } = this.state
    return <div className={styles.containeradd}>
      {materialCurrentValue === 0 &&
        <>
          <TextField
            id="standard-name"
            label="图片名称"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            autoFocus
            error={imgNameError === 'error'}
          />
          <input
            className={styles.imginput}
            onChange={e => this.handleInputUpLoad(e)}
            accept="image/*"
            id="raised-button-file"
            multiple
            type="file"
          />
          {imgPreviewUrl !== '' && <img src={imgPreviewUrl} />}
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">上传</Button>
          </label>
          <Button variant="contained" color="primary" onClick={this.handleSubmit}>提交</Button>
        </>}
    </div>
  }
}

export default withStyles(mStyles)(InContainerAdd)