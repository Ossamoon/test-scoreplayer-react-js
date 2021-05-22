import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="container__left">
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
        <div class="resizer" id="dragMe"></div>
        <div class="container__right">Right</div>
      </div>
    </div>
  );
}

export default App;
