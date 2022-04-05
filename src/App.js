import React, { useEffect, useState } from "react";

function App() {
  const getwm = async (owner, repo) => {
    const url = `https://api.github.com/repos/${encodeURI(owner)}/${encodeURI(
      repo
    )}`;
    const resp = await fetch(url);
    const a = await resp.json();

    return a;
  };

  const useFetchwm = (owner, repo) => {
    const [repositorio, setState] = useState({
      data: [],
      loading: true,
    });

    useEffect(() => {
      getwm(owner, repo).then((repos) => {
        setState({
          data: repos,
          loading: false,
        });
      });
    }, [owner, repo]);

    return repositorio;
  };

  const { data } = useFetchwm("watermelontools", "wm-extension");
  console.log(data);

  return (
    <div className="App">
      <div className="containerP jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-white position-relative">
        <div className="container ch">
          <div className="jumbotron jumbotron-fluid mb-3 pt-5 pb-5 bg-lightblue position-relative">
            <h4 className="mb-3 secondfont mb-3 font-weight-bold">Forks:</h4>
            <p>{data.forks}</p>
          </div>
        </div>
        <div className="container ch">
          <div className="jumbotron jumbotron-fluid mb-3 pt-5 pb-5 bg-lightblue position-relative">
            <h4 className="mb-3 secondfont mb-3 font-weight-bold">Watchers:</h4>
            <p>{data.watchers}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <h4 className="mb-3 secondfont mb-3 font-weight-bold">Members:</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
