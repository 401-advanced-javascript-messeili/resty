import '../scss/form.scss';
import React from 'react';
import { If, Then } from 'react-if';
const superagent = require('superagent');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', method: '', body: '', whileFetching: false };
  }

  handleChangeUrl = async (e) => {
    e.preventDefault();
    this.setState({ url: e.target.url.value, method: e.target.method.value, body: e.target.body.value, whileFetching: true });
    switch (e.target.method.value) {
      case 'GET':
        await superagent
          .get(`${e.target.url.value}`)
          .then((data) => {
            let info = { url: e.target.url.value, method: e.target.method.value, body: e.target.body.value };
            console.log('info:', info);
            let history;
            let check;
            this.setState({ whileFetching: false });

            if (localStorage.getItem('history')) {
              history = JSON.parse(localStorage.getItem('history'));
              history.forEach((element) => {
                element.url === info.url && element.method === info.method ? (check = true) : (check = false);
              });
              if (check) {
                this.props.handler(data);
              } else {
                history.push(info);
                localStorage.setItem('history', JSON.stringify(history));
                this.props.handler(data);
              }
            } else {
              history = [];
              localStorage.setItem('history', JSON.stringify(history));
            }
            console.log('history', history);
          })
          .catch((err) => {
            this.setState({ whileFetching: false });
            console.log(err.message);
            this.props.errorHandler(err.message);
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
          <form className='column' onSubmit={this.handleChangeUrl}>
            <div className='row'>
              <label htmlFor='url'>URL</label>
              <input id='url' type='url' name='url' value={this.state.url.value} />
              <button id='btn' type='submit'>
                {' '}
                GO{' '}
              </button>
            </div>
            <div className='row'>
              <label htmlFor='method'>Get</label>
              <input type='radio' id='GET' value='GET' name='method' defaultChecked />
              <label htmlFor='method'>Post</label>
              <input type='radio' id='POST' value='POST' name='method' />
              <label htmlFor='method'>Delete</label>
              <input type='radio' id='PATCH' value='PATCH' name='method' />
              <label htmlFor='method'>Patch</label>
              <input type='radio' id='DELETE' value='DELETE' name='method' />
              <label htmlFor='method'>Put</label>
              <input type='radio' id='PUT' value='PUT' name='method' />
              <textarea id='body' name='body'></textarea>
            </div>
          </form>
        </div>
        <If condition={this.state.whileFetching === true}>
          <Then>
            <div className='row'>
              <img src='https://i.gifer.com/YCZH.gif' alt='loading' width='200px'></img>
            </div>
          </Then>
        </If>
      </main>
    );
  }
}

export default Form;
