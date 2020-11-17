import '../scss/form.scss';
import React from 'react';
import { If, Then, Else } from './if';
const superagent = require('superagent');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', method: '', body: '', whileFetching: false };
  }

  handleChangeUrl = async (e) => {
    e.preventDefault();
    await this.setState({ url: e.target.url.value, method: e.target.method.value, body: e.target.body.value });
    await this.setState({ whileFetching: true });
    switch (this.state.method) {
      case 'GET':
        superagent.get(`${this.state.url}`).then((data) => {
          let info = { url: e.target.url.value, method: e.target.method.value, body: e.target.body.value };
          let history;

          if (localStorage.getItem('history')) {
            history = JSON.parse(localStorage.getItem('history'));
          } else {
            history = [];
          }
          let check = false;
          history.forEach((element) => {
            if (element.url === info.usl && element.method === info.method) {
              check = true;
            }
            if (check) {
              this.props.handler(data);
            } else {
              history.push(info);
              localStorage.setItem('history', JSON.stringify(history));
              this.props.handler(data);
            }
          });
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
              <textarea id="body" name="body"></textarea>
            </div>
          </form>
        </div>
        <If condition={this.state.whileFetching === true}>
          <Then>
            <div id="img-div">
              <img src="https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif" alt="loading" width="50px"></img>
            </div>
          </Then>
        </If>
      </main>
    );
  }
}

export default Form;
