import React from 'react'
// import logo from '../../../theme/img/error.png';

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className={'sweet-loading'}>
                    {/* <h1>Something went wrong.</h1> */}
                    <img src={"../images/html-template/error.png"} width="100" height="auto" alt={"logo"} />
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary
