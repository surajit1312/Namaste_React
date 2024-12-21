import { Component } from 'react';

class UserClass extends Component {
    // using props in Class components
    constructor(props) {
        super(props);
        // using state variables in Class components
        this.state = {
            count: 0,
        };
        console.log(this.props.name + ' - constructor called');
    }

    componentDidMount() {
        console.log(this.props.name + ' - componentDidMount called');
    }

    render() {
        console.log(this.props.name + ' - render called');
        const { name, location, contact } = this.props;
        let { count } = this.state;
        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
                <h5>Rating: {count}</h5>
                <button className='rating-btn' onClick={() => {
                    if (count <= 9) {
                        this.setState({
                            count: ++this.state.count
                        });
                    }
                }}>Increase Rating</button>
                <button className='rating-btn' onClick={() => {
                    if (count > 0) {
                        this.setState({
                            count: --this.state.count
                        });
                    }
                }}>Decrease Rating</button>
            </div>
        );
    }
}

export default UserClass;
