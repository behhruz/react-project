import React from "react";
import "./index2.css";

class Component extends React.Component {
  render() {
    return (
      <div className="big1">
        <img className="pic1" src={this.props?.src} alt="" />
        <div className="btn">
          <button className="btn1" src={this.props?.btn1}>
            FEATURED
          </button>
          <button className="btn2" src={this.props?.btn2}>
            FOR SALE
          </button>
        </div>
        <img className="src6" src={this.props?.src6} alt="" />

        <h1 className="title"> {this.props?.title}</h1>
        <h1 className="title2"> {this.props?.title2}</h1>
        <div className="big3">
          <img className="pic2" src={this.props?.src2} alt="" />
          <img className="pic3" src={this.props?.src3} alt="" />
          <img className="pic4" src={this.props?.src4} alt="" />
          <img className="pic5" src={this.props?.src5} alt="" />
        </div>
        <div className="big4">
          <p className="str1"> {this.props?.str1}</p>
          <p className="str2"> {this.props?.str2}</p>
          <p className="str3"> {this.props?.str3}</p>
          <p className="str4"> {this.props?.str4}</p>
        </div>
        <hr className="hr" />
        <div className="del1">
          <div className="del2">
            <del className="rr"> {this.props?.del}</del>
            <h3 className="del3"> {this.props?.del3}</h3>
          </div>
          <div className="like">
            <img className="ris1" src={this.props?.ris1} />
            <img className="ris2" src={this.props?.ris2} />
          </div>
        </div>
      </div>
    );
  }
}
export default Component;
