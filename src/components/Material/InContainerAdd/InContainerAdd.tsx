import * as React from 'react'
import styles from './InContainerAdd.module.css'
import TextField from '@material-ui/core/TextField';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { getQiniuToken, saveImgToQiniu } from '../../../apis/upload/qiniu'
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
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
}

interface State {
  name: string;
}

class InContainerAdd extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      name: ''
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

  handleInputUpLoad = async (e: any) => {
    try {
      console.log(e.target.files[0])
      const file = e.target.files[0]
      if (!file) {
        return
      }
      const { name } = file
      const time = moment("x")
      const suffix = `${time}-${name}`
      const key = encodeURI(`${suffix}`)
      let args: any = new FormData()
      args.append('file', file)
      const qiniuToken: any = await getQiniuToken()
      args.append('token', qiniuToken.data)
      args.append('key', key)
      const saveToQiniuResult: any = await saveImgToQiniu(args)
      console.dir(saveToQiniuResult)
    } catch (err) {
      handleAxiosAsyncError(err)
    }
  }

  render() {
    const { classes, materialCurrentValue } = this.props
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
          />
          <input
            className={styles.imginput}
            onChange={e => this.handleInputUpLoad(e)}
            accept="image/*"
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">上传</Button>
          </label>
        </>}
    </div>
  }
}

export default withStyles(mStyles)(InContainerAdd)