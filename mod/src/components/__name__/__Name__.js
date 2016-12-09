require('./<%- Name %>.less');

class <%- Name %> extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="<%= name %>">
                component <%= name %>
            </div>
        );
    }
}

module.exports = <%- Name %>;
