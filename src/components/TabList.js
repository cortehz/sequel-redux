import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTab } from "../actions/index";
import { bindActionCreators } from "redux";

class TabList extends Component {
  renderList() {
    return this.props.tabs.map(tab => {
      return (
        <button onClick={() => this.props.selectTab(tab)} key={tab.title}>
          {tab.title}
        </button>
      );
    });
  }
  render() {
    return (
      <div className="button-class">
        <div className="btn-group">{this.renderList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

// Anything returned from this function will end up as props on
// the TABList container
function mapDispatchToProps(dispatch) {
  //whenever selectTab is called, the result should be to all our reducers
  return bindActionCreators({ selectTab: selectTab }, dispatch);
}

//promote Tablist from a component to a container - it needs to know about this new dispatch method,
//selectBook. Make it available as props

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList);
