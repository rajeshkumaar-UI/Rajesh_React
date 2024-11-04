const parent = React.createElement(
    "div",
    {id: 'parent'},
    [React.createElement(
        "div",
        {id: 'child'},
        [React.createElement(
            'h1',
            {className:'testh1'},
            'Im h1 tag'
        ),
        React.createElement(
            'h1',
            {className:'testh2'},
            'Im h1 tag'
        )]
    ),
    React.createElement(
        "div",
        {id: 'child2'},
        [React.createElement(
            'h1',
            {className:'testh11'},
            'Im h1 tag'
        ),
        React.createElement(
            'h1',
            {className:'testh22'},
            'Im h1 tag'
        )]
    )]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

console.log('parent', parent);