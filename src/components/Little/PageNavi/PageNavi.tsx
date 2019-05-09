import * as React from 'react'
import styles from './PageNavi.module.css'
import { Button } from '@material-ui/core';
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'

export interface PageNaviProps {
  handleNaviBefore: () => void
  handleNaviNext: () => void
}

type Props = PageNaviProps

class PageNavi extends React.Component<Props> {
  render() {
    const { handleNaviBefore, handleNaviNext } = this.props
    return (
      <div className={styles.pagenavi}>
        <Button size="medium" color="inherit" onClick={handleNaviBefore}>
          <NavigateBefore fontSize={'default'} />
        </Button>
        <Button size="medium" color="inherit" onClick={handleNaviNext}>
          <NavigateNext fontSize={'default'} />
        </Button>
      </div>
    )
  }
}

export default PageNavi