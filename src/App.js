import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      leftWidth: 0,
    };
    
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
  }

  componentDidMount() {
    this.leftSide = document.getElementById("left");
    this.resizer = document.getElementById("resizer");
    this.rightSide = document.getElementById("right");

    this.resizer.addEventListener("mousedown", this.mouseDownHandler);
  }

  mouseDownHandler(e) {
    this.setState({
      x: e.clientX,
      leftWidth: this.leftSide.getBoundingClientRect().width
    });
  
    document.addEventListener("mousemove", this.mouseMoveHandler);
    document.addEventListener("mouseup", this.mouseUpHandler);
  }

  mouseMoveHandler(e) {
    const dx = e.clientX - this.state.x;
  
    const percent_leftWidth = ((this.state.leftWidth + dx) * 100) / this.resizer.parentNode.getBoundingClientRect().width;
    this.leftSide.style.width = `${percent_leftWidth}%`;
  
    document.body.style.cursor = "col-resize";
  
    this.leftSide.style.userSelect = "none";
    this.leftSide.style.pointerEvents = "none";
    this.rightSide.style.userSelect = "none";
    this.rightSide.style.pointerEvents = "none";
  };

  mouseUpHandler() {
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
        <div class="container">
          <div class="container__left" id="left">
            <div class="frame-wrapper__video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/vp_h649sZ9A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="resizer" id="resizer"></div>
          <div class="container__right" id="right">Right</div>
        </div>
      </div>
    );
  }
}

export default App;
