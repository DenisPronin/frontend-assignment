import { connect } from 'react-redux'
import CoreLayout from '../layouts/CoreLayout'
import { actions } from '../modules/markers'

const mapActionCreators = {
  ...actions
};

const mapStateToProps = (state) => ({
  markers: state.markers
});

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
