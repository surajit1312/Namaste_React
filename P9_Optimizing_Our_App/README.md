# Chapter 8: Let's Get Classy

## React Component Life Cycle hooks

### 1. Mounting Phase
- Constructor
- Render
- (React Updates DOM and references)
- componentDidMount


### 2. Updating Phase
- New Props/setState()/forceUpdate()
- Render
- (React Updates DOM and references)
- componentDidUpdate


### 3. Unmounting Phase
- componentWillUnmount


## Use case for Lifecycle hooks calls where we have a Parent Component Class and Two Child Component Class

### 1. Render Phase
- Parent - constructor called
- About.jsx:16 Parent - render called
- UserClass.jsx:11 Surajit Rana (class 1) - constructor called
- UserClass.jsx:19 Surajit Rana (class 1) - render called
- UserClass.jsx:11 Surajit Rana (class 2) - constructor called
- UserClass.jsx:19 Surajit Rana (class 2) - render called


### 2. Update Phase - DOM updated in a single BATCH - React Optimization
- UserClass.jsx:15 Surajit Rana (class 1) - componentDidMount called
- UserClass.jsx:15 Surajit Rana (class 2) - componentDidMount called
- About.jsx:12 Parent - componentDidMount called

