var React = require('react');

// var About = React.createClass({
//     render: function(){
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return(
            <div>
            <h1 className="text-center">About</h1>
            <p>This is the About paragraph, we are still developing our application, if you want to contact us, do not hesitate to send an email to: marc.esso01@gmail.com</p>
            <p>Here are some of the tools i used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map </a> - I used openWeatherMap API to ge the data.
                </li>
            </ul>
            </div>
        );
};

module.exports= About;