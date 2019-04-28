import * as React from 'react'
// import styles from './FunctionTabs.module.css'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
const Attribute = React.lazy(() => import('./Attribute/Attribute'))
const Layers = React.lazy(() => import('./Layers/Layers'))
const Pages = React.lazy(() => import('./Pages/Pages'))

function TabContainer(props: any) {
  return (
    <Typography component="div" style={{ padding: 8, height: 'calc(100vh - 134px)', overflowY: 'scroll' }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '350px',
    flexGrow: 1,
    backgroundColor: 'white'
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // what? so fasion
  function handleChange(event: any, newValue: any) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="属性" />
          <Tab label="图层" />
          <Tab label="页面" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
        <React.Suspense fallback={null}>
          <Attribute />
        </React.Suspense>
      </TabContainer>}
      {value === 1 && <TabContainer>
        <React.Suspense fallback={null}>
          <Layers />
        </React.Suspense>
      </TabContainer>}
      {value === 2 && <TabContainer>
        <React.Suspense fallback={null}>
          <Pages />
        </React.Suspense>
      </TabContainer>}
    </div>
  );
}

export default SimpleTabs