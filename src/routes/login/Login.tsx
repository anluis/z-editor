import * as React from 'react'
import PropTypes from 'prop-types'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import outstyles from './Login.module.css'

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

export interface Props extends WithStyles<typeof styles> { }

interface State {
  userName: string
  passWord: string
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userName: '',
      passWord: ''
    }
  }

  handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [name]: event.target.value,
    } as Pick<State, keyof State>);
  };

  handleSubmit = () => {

  }

  render() {
    const { classes } = this.props
    return (
      <div className={outstyles.login}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={this.state.userName}
            onChange={this.handleChange('userName')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
        </form>
        <Button onClick={() => this.handleSubmit}>提交</Button>
      </div>
    )

  }
}

(Login as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any

export default withStyles(styles)(Login)