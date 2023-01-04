import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>has some error!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
