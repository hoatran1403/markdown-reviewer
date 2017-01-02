import { connect } from 'react-redux';
import { parseText} from '../actions/actionCreators';
import TextInput from '../components/TextInput';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  showPreview: (text) => {
    dispatch(parseText(text))
  }
})

const InputText = connect (
  mapStateToProps,
  mapDispatchToProps
)(TextInput)

export default InputText;
