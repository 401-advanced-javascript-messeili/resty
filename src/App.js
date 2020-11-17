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
    console.log('Hi from the App', data.body);
    await this.setState({ count: data.body.count ? data.body.count : 1, results: data.body, headers: data.headers });
  };

  error = (err) => {
    this.setState({ error: true, errorBody: err });
  };

  render() {
    return (
      <>
        <Header />
        {/* <main>
          <ul>
            <h3>History</h3>
            <History />
          </ul>
          <Form errorHandler={this.error} handler={this.update} />
          <Results errorBody={this.state.errorBody} isError={this.state.isError} headers={this.state.headers} count={this.state.Count} results={this.state.results} />
        </main> */}
        <Form title={'Get Star Wars People'} handler={this.handleForm} />
        <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
        <Footer />
      </>
    );
  }
}

export default App;
