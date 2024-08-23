import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button onClick={() => alert(1)}>按钮</Button> */}
        <Button
          className="custom"
          onClick={() => {
            alert("123");
          }}
          btnType={ButtonType.Primary}
        >
          Primary
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} href="www.baidu.com">
          Danger
        </Button>
        <Button disabled>Disabled</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          Link
        </Button>

        <Button btnType={ButtonType.Link} disabled href="www.baidu.com">
          Disabled Link
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
