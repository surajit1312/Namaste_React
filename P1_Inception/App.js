// const heading = React.createElement('h1', {
//     id: 'root-heading',
//     abc: 'xyz',
// }, 'Hello World from React!');
// console.log(heading);

{/* <div id="parent">
    <div id="child1">
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
    <div id="child2"></div>
        <h1>I am H1 tag</h1>
        <h2>I am H2 tag</h2>
    </div>
</div> */}

const parent = React.createElement('div', {
    id: 'parent',
}, [
    React.createElement('div', {
        id: 'child1',
        key: 'child1'
    }, [
        React.createElement('h1', {
            key: 'h1'
        }, 'I am H1 tag'),
        React.createElement('h2', {
            key: 'h2'
        }, 'I am H2 tag'),
    ]),
    React.createElement('div', {
        id: 'child2',
        key: 'child2'
    }, [
        React.createElement('h1', {
            key: 'h3'
        }, 'I am H1 tag'),
        React.createElement('h2', {
            key: 'h4'
        }, 'I am H2 tag'),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
