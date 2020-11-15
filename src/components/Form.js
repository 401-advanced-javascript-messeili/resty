import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', method: '' };
  }

  handleChangeUrl = (e) => {
    e.preventDefault();
    this.setState({ url: e.target.url.value, method: e.target.method.value });
    console.log(this.state.method);
  };

  clickHandler = () => {};

  render() {
    return (
      <main>
        <form onSubmit={this.handleChangeUrl}>
          <div id="input">
            <label for="url">url</label>
            <input id="url" type="text" name="url" value={this.state.method.value} />
            <input type="submit" value="GO" />
          </div>
          <div id="methods">
            <label for="method">Get</label>
            <input type="radio" value="Get " name="method" />
            <label for="method">Post</label>
            <input type="radio" value="Post " name="method" />
            <label for="method">Delete</label>
            <input type="radio" value="Delete " name="method" />
            <label for="method">Put</label>
            <input type="radio" value="Put " name="method" />
          </div>
        </form>
        <div>
          {this.state.method}
          {this.state.url}
        </div>
      </main>
    );
  }
}

export default Form;
