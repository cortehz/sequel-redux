import React, { Component } from "react";

const Header = () => {
  return (
    <div className="sequel-header">
      <nav className="nav-class">
        <div className="sequel-name">
          <div className="minimizers">
            <div className="minimizer-icon">
              <i
                style={{ color: "rgb(225, 96, 86) " }}
                className="fas fa-times-circle"
              />
            </div>
            <div className="minimizer-icon">
              <i
                style={{ color: "rgb(242, 195, 80)" }}
                className="fas fa-minus-circle"
              />
            </div>
            <div className="minimizer-icon">
              <i
                style={{ color: "rgb(120, 204, 88)" }}
                className="fas fa-chevron-circle-right"
              />
            </div>
          </div>
          <div className="the-name">
            <h1>Sequel Pro</h1>
          </div>
          <div className="the-name" />
        </div>
        <div className="second-nav">
          <div className="choose-database">
            <div className="select">
              <select>
                <option value="volvo">Choose Database...</option>
              </select>
            </div>
            <div className="database-select">Select database</div>
          </div>
          <div className="structure-query">
            <div className="structure">
              <i className="fas fa-atom" />
              <p className="sub">structure</p>
            </div>
            <div className="structure">
              <i className="fas fa-table" />
              <p className="sub">content</p>
            </div>
            <div className="structure">
              <i className="fas fa-retweet" />
              <p className="sub">relation</p>
            </div>
            <div className="structure">
              <i className="fas fa-link" />
              <p className="sub">trigger</p>
            </div>
            <div className="structure">
              <i className="fas fa-info" />
              <p className="sub">table info</p>
            </div>
            <div className="structure">
              <i className="fas fa-terminal" />
              <p className="sub">query</p>
            </div>
          </div>
          <div className="table-history">
            <div className="table-history-class">
              <i className="far fa-arrow-alt-circle-left" />
              <i className="far fa-arrow-alt-circle-right" />
              <p className="sub">table history</p>
            </div>
            <div className="table-history-class">
              <i className="fas fa-users" />
              <p className="sub">users</p>
            </div>
            <div className="table-history-class">
              <i className="fas fa-toggle-off" />
              <p className="sub">console</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
