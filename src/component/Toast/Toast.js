import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import showtoastActions from '../../actions/show-toast-action';
import { Snackbar, withStyles } from '@material-ui/core';

const toastStyle = (theme) => ({
    success: {
        backgroundColor: 'green'
    },
    warning: {
        backgroundColor: 'yellow'
    },
    danger: {
        backgroundColor: 'red'
    }
});


class Toast extends PureComponent {

    closeNotification = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.hideToast();
    }
    render() {
        let { toast, classes } = this.props;
        let { toastMessage } = toast;
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                color={toastMessage.type}
                autoHideDuration={3000}
                message={toastMessage.message}
                open={toast.showToast}
                onClose={this.closeNotification}
                ContentProps={{
                    classes: {
                        root: classes[toast.toastMessage.type]
                    }
                }}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toast: state.showToastReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(showtoastActions, dispatch);
}

export default withStyles(toastStyle)(connect(mapStateToProps, mapDispatchToProps)(Toast));
