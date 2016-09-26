import React, { PropTypes } from 'react'
import Marker from '../Marker/Marker'

export class Sidebar extends React.Component {
  static propTypes = {
    markers: PropTypes.object.isRequired
  };

  render () {
    const { markers } = this.props;

    return (
      <div>
        {markers.ids.map((id) => {
          const marker = markers.entities[id];

          return (
            <Marker
              key={`marker-item-${id}`}
              id={id}
              marker={marker}
            />
          )
        })}
      </div>
    )
  }

}

export default Sidebar
