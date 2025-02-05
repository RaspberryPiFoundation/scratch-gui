import React from "react";
import { connect } from "react-redux";
import bindAll from "lodash.bindall";
import { manualUpdateProject } from "../reducers/project-state";

const EventListenersHOC = function (WrappedComponent) {
  class EventListenersComponent extends React.Component {
    constructor(props) {
      super(props);
      bindAll(this, ["handleSave"]);
    }
    componentDidMount() {
      window.addEventListener("scratch-gui-save", this.handleSave);
    }
    componentWillUnmount() {
      window.removeEventListener("scratch-gui-save", this.handleSave);
    }
    handleSave() {
      this.props.dispatch(manualUpdateProject());
    }
    render() {
      const {...componentProps} = this.props;
      return <WrappedComponent {...componentProps} />;
    }
  }
  return connect()(EventListenersComponent);
};

export { EventListenersHOC as default };
