import  React, {useEffect} from "react";

function App() {

  const url = "https://api.github.com/repos/watermelontools/wm-extension";
  const fetchApi = async () => {
    const Response = await fetch(url);
    const ResponseJson = await Response.json();
    const ForksJson = ResponseJson.forks;
    const WatchersJson = ResponseJson.watchers;
    console.log(ForksJson);
    console.log(WatchersJson);

  };
  useEffect(() => {
    fetchApi();
  }, []);


  return (
    <div class="App">
      <div class="container">
        <div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div class="col-md-6 pt-6 pb-6 align-self-center">
            <h4 class="mb-3">Forks:</h4>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div class="col-md-6 pt-6 pb-6 align-self-center">
            <h4 class="mb-3">Watchers:</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
