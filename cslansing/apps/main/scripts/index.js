define([
    'react',
    'jsx!components/header',
    'jsx!components/section',
    'jsx!components/hello'
    ], function (React, Header, Section, Hello) {
        var Index = React.createClass({
            render: function() {
                var links = [
                    {
                        url: 'https://www.facebook.com/chris.lansing.98',
                        iconClass: 'fa fa-facebook-square',
                        name: 'Facebook'
                    },
                    {
                        url: 'https://plus.google.com/u/0/107904017027887656465/posts',
                        iconClass: 'fa fa-google-plus',
                        name: 'Google',
                    },
                    {
                        url: 'https://github.com/cslansing',
                        iconClass: 'fa fa-github',
                        name: 'GitHub',
                    },
                    {
                        url: 'https://www.linkedin.com/profile/view?id=205579495',
                        iconClass: 'fa fa-linkedin',
                        name: 'LinkedIn',
                    },
                    {
                        url: '/static/Resume.pdf',
                        iconClass: 'fa fa-file-text',
                        name: 'Resume',
                    }
                ];
                return (
                    <div className="content">
                        <Header
                            title="Chris Lansing"
                            links={links} />
                        <Section
                            header="About"
                            content="asdf" />
                        <Hello name="world" />
                    </div>
                );
            }
        });

    return Index;
});