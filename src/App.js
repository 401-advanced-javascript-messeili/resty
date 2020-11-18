import React from 'react';
import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';
import Results from './components/results';
import History from './components/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      errorBody: '',
      error: false,
      headers: {},
    };
  }
  handleForm = async (data) => {
    try {
      console.log('Hi from the App', data.body);
      await this.setState({ count: data.body.count ? data.body.count : 1, results: data.body, headers: data.headers });
    } catch (err) {
      console.log(err.message);
      this.errorHandler(err.message);
    }
  };

  errorHandler = (err) => {
    this.setState({ error: true, errorBody: err });
  };
  errorUpdate = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <>
        <Header />

        <Form handler={this.handleForm} errorHandler={this.errorHandler} />
        <ul>
          <h3>History</h3>
          <History />
        </ul>
        <Results errorUpdate={this.errorUpdate} count={this.state.count} results={this.state.results} headers={this.state.headers} error={{ error: this.state.error, errorBody: this.state.errorBody }} />
        <Footer />
      </>
    );
  }
}

export default App;
