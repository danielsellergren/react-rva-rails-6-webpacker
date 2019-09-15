import React from 'react';

class GreetingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/greetings.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  renderGreetings() {
    return this.state.data.map(greeting => (
      <li key={greeting.id}>
        {greeting.language}: {greeting.content}
      </li>
    ));
  }

  render() {
    return (
      <section>
        <h1>Hello Data!</h1>
        <ul>{this.renderGreetings()}</ul>
      </section>
    );
  }
}

export default GreetingList;