import React, { PropTypes } from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import Sidebar from '../../components/Sidebar/Sidebar'
import Grid from '../../components/Grid/Grid'

export const CoreLayout = ({markers}) => (
  <div className={classes.mainContainer}>
    <div className={classes.sidebarContainer}>
      <Sidebar
        markers={markers}
      />
    </div>
    <div className={classes.contentContainer}>
      <Grid />
    </div>
  </div>
)

CoreLayout.propTypes = {
  markers: PropTypes.object.isRequired
};

export default CoreLayout
