import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';
import Developer from './Developer';
import DeveloperClass from './DeveloperClass';

/**
 * Refer: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram
 * 
 * 1. Render Phase
 * 
 * Parent - constructor called
 * About.jsx:16 Parent - render called
 * UserClass.jsx:11 Surajit Rana (class 1) - constructor called
 * UserClass.jsx:19 Surajit Rana (class 1) - render called
 * UserClass.jsx:11 Surajit Rana (class 2) - constructor called
 * UserClass.jsx:19 Surajit Rana (class 2) - render called
 * 
 * 2. Update Phase - DOM updated in a single BATCH - React Optimization
 * 
 * UserClass.jsx:15 Surajit Rana (class 1) - componentDidMount called
 * UserClass.jsx:15 Surajit Rana (class 2) - componentDidMount called
 * About.jsx:12 Parent - componentDidMount called
 */

class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent - constructor called');
    }

    componentDidMount() {
        console.log('Parent - componentDidMount called');
    }

    render() {
        console.log('Parent - render called');
        return (
            <div>
                <h1>About</h1>
                <h2>Developers: </h2>
                {/* <User name={'Surajit Rana (function)'} location={'Bengaluru'} contact={'@surajitrana'} /> */}
                {/* <UserClass name={'Surajit Rana (class 1)'} location={'Bengaluru'} contact={'@surajitrana'} />
                <UserClass name={'Surajit Rana (class 2)'} location={'Bengaluru'} contact={'@surajitrana'} /> */}
                <Developer />
                {/* <DeveloperClass /> */}
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={'Surajit Rana (function)'} location={'Bengaluru'} contact={'@surajitrana'} />
//             <UserClass name={'Surajit Rana (class)'} location={'Bengaluru'} contact={'@surajitrana'} />
//         </div>
//     );
// };

export default About;
