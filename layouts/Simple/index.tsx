import { Page } from '@geist-ui/core'
import styles from 'styles/layouts/Simple.module.css'

const SimpleLayout: React.FC<{ children: React.ReactElement }> = ({ children }): JSX.Element => {
  return (
    <Page id="simple-layout" className={styles.simpleLayout}>
      {children}
    </Page>
  )
}

export default SimpleLayout
