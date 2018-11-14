import React, { Component } from "react";

const Aside = () => {
  return (
    <aside className="quickConnect">
      <div className="quickConnectSub">
        <i className="fas fa-bolt" />
        QUICK CONNECT
      </div>
      <hr />
      <div className="quickConnectSub">FAVOURITE</div>
      <div className="quickConnectSub3">
        <div className="icon-div">
          <i className="fas fa-cog" />
        </div>
        <div className="icon-div">
          <i className="fas fa-folder-plus" />
        </div>
        <div className="icon-div">+</div>
        <div className="icon-div iconDiv">|||</div>
      </div>
    </aside>
  );
};

export default Aside;
