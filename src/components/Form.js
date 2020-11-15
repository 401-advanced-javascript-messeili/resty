import '../scss/form.scss';
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
        <div>
          <form class="column" onSubmit={this.handleChangeUrl}>
            <div class="row">
              <label for="url">URL</label>
              <input id="url" type="url" name="url" value={this.state.method.value} />
              <button type="submit"> GO </button>
            </div>
            <div class="row">
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
          <table>
            <thead>
              <tr class="row">
                <td>{this.state.method}</td>
                <td>{this.state.url}</td>
              </tr>
            </thead>
          </table>
        </div>
      </main>
    );
  }
}

export default Form;
