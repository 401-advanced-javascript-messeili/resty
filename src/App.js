import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
    };
  }
  handleForm = async (data) => {
    console.log('Hi from the App', data.body);
    await this.setState({ count: data.body.count ? data.body.count : 1, results: data.body, headers: data.headers });
  };
  render() {
    return (
      <>
        <Header />
        {/* <button data-testid="button" onClick={() => this.setState({ num: this.state.num + 1 })}></button>
        <p data-testid="output">{this.state.num}</p> */}
        <Form title={'Get Star Wars People'} handler={this.handleForm} />
        <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
        <Footer />
      </>
    );
  }
}

export default App;
