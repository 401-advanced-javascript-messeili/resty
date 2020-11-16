import '../scss/form.scss';
import React from 'react';
const superagent = require('superagent');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', method: '' };
  }

  handleChangeUrl = async (e) => {
    e.preventDefault();
    await this.setState({ url: e.target.url.value, method: e.target.method.value });
    console.log(this.state);
    switch (this.state.method) {
      case 'GET':
        superagent.get(`${this.state.url}`).then((data) => {
          this.props.handler(data);
        });
        break;
      case 'POST':
        superagent.post(`${this.state.url}`).then((data) => {
          this.props.handler(data);
        });
        break;
      case 'PATCH':
        superagent.patch(`${this.state.url}`).then((data) => {
          this.props.handler(data);
        });
        break;
      case 'DELETE':
        superagent.delete(`${this.state.url}`).then((data) => {
          this.props.handler(data);
        });
        break;
      case 'PUT':
        superagent.put(`${this.state.url}`).then((data) => {
          this.props.handler(data);
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <main>
        <div>
          <form className="column" onSubmit={this.handleChangeUrl}>
            <div className="row">
              <label htmlFor="url">URL</label>
              <input id="url" type="url" name="url" value={this.state.url.value} />
              <button type="submit"> GO </button>
            </div>
            <div className="row">
              <label htmlFor="method">Get</label>
              <input type="radio" value="GET" name="method" defaultChecked />
              <label htmlFor="method">Post</label>
              <input type="radio" value="POST" name="method" />
              <label htmlFor="method">Delete</label>
              <input type="radio" value="PATCH" name="method" />
              <label htmlFor="method">Patch</label>
              <input type="radio" value="DELETE" name="method" />
              <label htmlFor="method">Put</label>
              <input type="radio" value="PUT" name="method" />
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Form;
