import React, { Component } from "react";
import { connect } from "react-redux";

class TabDetail extends Component {
  render() {
    //to check if this.props.tab is null
    if (!this.props.tab) {
      return <div>SELECT A TAB TO GET STARTED</div>;
    }

    return (
      <div>
        <h3>Tab for: </h3>
        <div>{this.props.tab.title}</div>
        <h3>The video</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src={this.props.tab.src}
            frameborder="0"
            allowfullscreen
          />
        </div>

        <div />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tab: state.activeTab
  };
}

export default connect(mapStateToProps)(TabDetail);
