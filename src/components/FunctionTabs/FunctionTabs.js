import React from 'react'
import PropTypes from 'prop-types'
import Tab from '@material-ui/core/Tab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import { Tabs } from '@material-ui/core'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})
class FunctionTabs extends React.Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="页面属性" icon={<FavoriteIcon />} />
            <Tab label="组件属性" icon={<FavoriteIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer> </TabContainer>}
        {value === 1 && <TabContainer> </TabContainer>}
      </div>
    )
  }
}

FunctionTabs.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(FunctionTabs)
