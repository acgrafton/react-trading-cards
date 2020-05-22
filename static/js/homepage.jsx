"use strict";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome!</p>
        <a href="/cards">Cards</a>
        <img src='/static/img/balloonicorn.jpg' />
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
