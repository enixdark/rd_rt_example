'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = _react2.default.createClass({
  displayName: 'App',


  getInitialState() {
    return {
      greeting: "",
      message: ""
    };
  },
  componentWillMount() {
    this.setState({
      greeting: this.props.greeting
    });
  },

  componentDidMount() {
    this.refs.input.focus();
  },
  handleClear: event => {
    undefined.refs.input.value = "";
    undefined.setState({
      message: ""
    });
  },
  handleChange: event => {
    undefined.setState({
      message: event.target.value
    });
  },

  render: () => {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Refs and data binding'
      ),
      _react2.default.createElement(
        'h2',
        null,
        undefined.state.greeting
      ),
      'Type a message:',
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'text', ref: 'input', onChange: undefined.handleChange }),
      _react2.default.createElement('br', null),
      'Your message: ',
      undefined.state.message,
      _react2.default.createElement('br', null),
      _react2.default.createElement('input', { type: 'button', value: 'Clear', onClick: undefined.handleClear })
    );
  }
});

(0, _reactDom.render)(_react2.default.createElement(App, { greeting: 'let\'s binding some values' }), document.getElementById('#app'));

