define(['react'], function (React) {
    var Header = React.createClass({
        render: function() {
            return (

<div className="jumbotron">
    <h1>Chris Lansing</h1>
    <p>
        <a href="https://www.facebook.com/chris.lansing.98" target="_blank">
            <i className="fa fa-facebook-square"></i>Facebook
        </a>
        <a href="https://plus.google.com/u/0/107904017027887656465/posts" target="_blank">
            <i className="fa fa-google-plus"></i>Google+
        </a>
        <a href="https://github.com/cslansing" target="_blank">
            <i className="fa fa-github"></i>Github
        </a>
        <a href="https://www.linkedin.com/profile/view?id=205579495" target="_blank">
            <i className="fa fa-linkedin"></i>LinkedIn
        </a>
        <br />
        <a href="{{ STATIC_URL }}Resume.pdf" target="_blank">
            <i className="fa fa-file-text"></i>Resume
        </a>
    </p>
</div>

            );
        }
    });

    return Header;
});
