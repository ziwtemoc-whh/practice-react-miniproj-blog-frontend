const React = require("react");
const ReactRedux = require("react-redux");
const SignInDialogContainer = require("./modal/SignInDialogContainer").default;
//const appUtils = require("../../lib/app-utils");

class GlobalComponentContainer extends React.Component {
    // componentDidMount() {
    //     appUtils.preventRendering();
    // }

    render() {
        return (
            <React.Fragment>
                <SignInDialogContainer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({

    });
};

export default ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalComponentContainer);
