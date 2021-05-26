import React from 'react';
import './App.css';

import Sheet1 from './mozart_piano_sonata_11/1.png';
import Sheet2 from './mozart_piano_sonata_11/2.png';
import Sheet3 from './mozart_piano_sonata_11/3.png';
import Sheet4 from './mozart_piano_sonata_11/4.png';
import Sheet5 from './mozart_piano_sonata_11/5.png';
import Sheet6 from './mozart_piano_sonata_11/6.png';
import Sheet7 from './mozart_piano_sonata_11/7.png';
import Sheet8 from './mozart_piano_sonata_11/8.png';
import Sheet9 from './mozart_piano_sonata_11/9.png';
import Sheet10 from './mozart_piano_sonata_11/10.png';
import Sheet11 from './mozart_piano_sonata_11/11.png';
import Sheet12 from './mozart_piano_sonata_11/12.png';
import Sheet13 from './mozart_piano_sonata_11/13.png';
import Sheet14 from './mozart_piano_sonata_11/14.png';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      leftWidth: 0,
    };
  }

  componentDidMount() {
    this.leftSide = document.getElementById("left");
    this.resizer = document.getElementById("resizer");
    this.rightSide = document.getElementById("right");

    this.resizer.addEventListener("mousedown", this.mouseDownHandler);
  }

  mouseDownHandler = (e) => {
    this.setState({
      x: e.clientX,
      leftWidth: this.leftSide.getBoundingClientRect().width
    });
  
    document.addEventListener("mousemove", this.mouseMoveHandler);
    document.addEventListener("mouseup", this.mouseUpHandler);
  }

  mouseMoveHandler = (e) => {
    const dx = e.clientX - this.state.x;
  
    const percent_leftWidth = ((this.state.leftWidth + dx) * 100) / this.resizer.parentNode.getBoundingClientRect().width;
    this.leftSide.style.width = `${percent_leftWidth}%`;
  
    document.body.style.cursor = "col-resize";
  
    this.leftSide.style.userSelect = "none";
    this.leftSide.style.pointerEvents = "none";
    this.rightSide.style.userSelect = "none";
    this.rightSide.style.pointerEvents = "none";
  };

  mouseUpHandler = (e) => {
    document.body.style.removeProperty("cursor");
  
    this.leftSide.style.removeProperty("user-select");
    this.leftSide.style.removeProperty("pointer-events");
    this.rightSide.style.removeProperty("user-select");
    this.rightSide.style.removeProperty("pointer-events");
  
    document.removeEventListener("mousemove", this.mouseMoveHandler);
    document.removeEventListener("mouseup", this.mouseUpHandler);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="container__left" id="left">
            <div className="frame-wrapper__video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/vp_h649sZ9A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="resizer" id="resizer"></div>
          <div className="container__right" id="right">
            <div className="all-img-wrapper">
              <div className="sheet-wrapper">
                <img src={Sheet1} alt="[sheet]" />
                <div className="bar-row"></div>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet2} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet3} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet4} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet5} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet6} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet7} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet8} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet9} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet10} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet11} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet12} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet13} alt="[sheet]"/>
              </div>
              <div className="sheet-wrapper">
                <img src={Sheet14} alt="[sheet]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
