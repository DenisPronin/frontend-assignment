import React, { PropTypes } from 'react'
import classes from './Marker.scss'

export class Marker extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    marker: PropTypes.object.isRequired
  };

  render () {
    const { marker } = this.props;
    const xLabel = marker.expectedX;
    const yLabel = marker.expectedY;

    return (
      <div className={classes.markerItem}>
        {`${xLabel}, ${yLabel}`}
      </div>
    )
  }

}

export default Marker
