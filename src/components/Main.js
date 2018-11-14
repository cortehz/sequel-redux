import React, { Component } from "react";
import Aside from "./Aside";
import TabList from "./TabList";
import TabDetail from "./TabDetail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="main">
        <Aside />
        <section className="connection-details">
          <div className="details">
            <h4>Enter connection details below, or choose a favourite</h4>
          </div>
          <div className="form-class">
            <TabList />

            <div className="the-form">
              <div className="outside-box">
                <div className="label">
                  <label id="name-label">Name:</label>
                </div>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  required
                />
                <br />

                <div className="label">
                  <label id="name-label">Host:</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  required
                />
                <br />
                <div className="label">
                  <label id="name-label">Username:</label>
                </div>
                <input type="text" id="name" name="name" />
                <br />

                <div className="label">
                  <label id="name-label">Password:</label>
                </div>
                <input type="password" id="email" name="Password" />
                <br />
                <div className="label">
                  <label id="name-label">Database:</label>
                </div>
                <input type="text" id="name" placeholder="Optional" />
                <br />
                <div className="label">
                  <label id="name-label">Port:</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="3306"
                  required
                />
                <br />
              </div>
            </div>

            <div className="submit-class">
              <div>
                <i>?</i>
              </div>
              <div>
                <button>Connect</button>
              </div>
            </div>

            <div className="test-connection">
              <button>Add to favourites</button>
              <button>Save Changes</button>
              <button>Test Connection</button>
            </div>
          </div>
        </section>

        <TabDetail />
      </main>
    );
  }
}

export default Main;
