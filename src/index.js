import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById("root"));
