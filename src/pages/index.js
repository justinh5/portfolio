import React from 'react';
import Layout from '../components/layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading'
    };
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading}`}>
          <div id="wrapper">
            <Header/>
            <Footer/>
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
