'use strict';

var app = {
    title: 'Indesicion App',
    subtitle: 'Todo List',
    option: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle ? app.subtitle : null
    ),
    React.createElement(
        'p',
        null,
        app.option.length > 0 ? 'Here a your options' : 'No Caption'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        )
    )
);
var user = {
    name: "Andrew",
    age: 27,
    location: "New York"
};

function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        'Location ',
        location
    ) : undefined;
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, document.getElementById("root"));
