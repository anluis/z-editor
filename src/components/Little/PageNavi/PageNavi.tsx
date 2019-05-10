import * as React from 'react'
import styles from './PageNavi.module.css'
import { Button } from '@material-ui/core';
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'

export interface PageNaviProps {
  handleNaviBefore: () => void
  handleNaviNext: () => void
  listLength: number
  currentPage: number
}

type Props = PageNaviProps

class PageNavi extends React.Component<Props> {
  render() {
    const { handleNaviBefore, handleNaviNext, listLength, currentPage } = this.props
    return (
      <div className={styles.pagenavi}>
        <Button
          size="medium"
          color="inherit"
          onClick={handleNaviBefore}
          disabled={currentPage <= 1}
        >
          <NavigateBefore fontSize={'default'} />
        </Button>
        <Button
          size="medium"
          color="inherit"
          onClick={handleNaviNext}
          disabled={currentPage >= listLength}
        >
          <NavigateNext fontSize={'default'} />
        </Button>
      </div>
    )
  }
}

export default PageNavi