import { Component } from 'react';

class DeveloperClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developers: [],
            count: 0
        };
        console.log('Developer Class - Constructor called');
    }

    async componentDidMount() {
        console.log('Developer Class - componentDidMount called');
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const developers = await data.json();
        this.setState({
            developers,
            count: this.state.count
        });
        this.timer = setInterval(() => {
            console.log('Timer started at componentDidMount');
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Count state updated in componentDidUpdate. Prev:',
                prevState.count, 'Current:', this.state.count);
        }
        console.log('Developer Class - componentDidUpdate called');
    }

    componentWillUnmount() {
        // used for clean up of all the watchers and hooks which we don't need in other components/routes
        clearInterval(this.timer);
        console.log('Developer Class - componentWillUnmount called: Timer cleared!!!');
    }

    render() {
        if (this.state.developers.length === 0) {
            return (
                <div className='user-card'>
                    <h2>Name:</h2>
                    <h3>Location:</h3>
                    <h4>Contact:</h4>
                </div>
            );
        }
        return (
            <div className='user-card-list-class'>
                <h5>Rating: {this.state.count}</h5>
                <button onClick={() => {
                    this.setState({
                        developers: this.state.developers,
                        count: this.state.count + 1
                    });
                }}>Update Rating</button>
                {
                    this.state.developers.map((developer) => {
                        const { id, name, address, email } = developer;
                        return (
                            <div className='user-card' key={id}>
                                <h2>Name:{name}</h2>
                                <h3>Location: {address?.street}, {address?.city}, {address?.zipcode}</h3>
                                <h4>Contact: {email}</h4>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default DeveloperClass;
