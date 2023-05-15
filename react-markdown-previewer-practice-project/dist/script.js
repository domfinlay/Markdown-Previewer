import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

marked.use({
  breaks: true });


// Parent app that manages input state and sends to other apps
class MarkdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "# Welcome to my Markdown Previewer!\n## Type in this box here to format your markdown, using symbols to create headings like this...\n...[links](https://www.google.co.uk/), \n code, either `<div> in-line </div>` \nor \n```\n<p>multi</p>\n<p>line</p>\n```\n*italic* text or **bold**,\n> block quotes, \n\n- lists \n\n and images! \n![computer](https://png.pngtree.com/png-vector/20220105/ourmid/pngtree-small-blue-vector-computer-icon-png-image_4083278.png)",
      markdown: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleChange({ target: { value: this.state.inputValue } });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      markdown: marked.parse(event.target.value) });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Editor, { input: this.state.inputValue, handleChange: this.handleChange }), /*#__PURE__*/
      React.createElement(Previewer, { input: this.state.markdown })));


  }}



// Editor box for user input
class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "editor-container" }, /*#__PURE__*/
      React.createElement("h1", null, "Type your markdown here:"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        value: this.props.input,
        onChange: this.props.handleChange })));



  }}



// Previewer box, which formats user input with as markdown
class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", { id: "preview-container" }, /*#__PURE__*/
    React.createElement("h2", { id: "preview-title" }, "Preview:"), /*#__PURE__*/
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.props.input } }));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(MarkdownApp, null)),

document.getElementById("base"));