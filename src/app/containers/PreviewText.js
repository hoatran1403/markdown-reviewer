import { connect } from 'react-redux';
import TextPreview from '../components/TextPreview';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})
const PreviewText = connect(mapStateToProps, mapDispatchToProps)(TextPreview);

export default PreviewText;
