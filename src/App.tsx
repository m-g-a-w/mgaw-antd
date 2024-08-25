import React from "react";
// Button
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
// Menu
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/SubMenu";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* Button */}
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
        {/* Menu */}
        <div>
          {/* 横向菜单 */}
          <Menu
            defaultIndex="0"
            onSelect={(index: string) => {
              alert(index);
            }}
          >
            <MenuItem>dropdown1</MenuItem>
            <MenuItem disabled>dropdown2</MenuItem>
            <SubMenu title="dropdown3">
              <MenuItem>ccc</MenuItem>
              <MenuItem>ddd</MenuItem>
            </SubMenu>
          </Menu>
          {/* 纵向菜单 */}
          <Menu
            mode="vertical"
            onSelect={(index: string) => {
              alert(index);
            }}
            defaultOpenSubMenus={["2"]}
          >
            <MenuItem>dropdown1</MenuItem>
            <MenuItem disabled>dropdown2</MenuItem>
            <SubMenu title="dropdown3">
              <MenuItem>ccc</MenuItem>
              <MenuItem>ddd</MenuItem>
            </SubMenu>
          </Menu>
        </div>
      </header>
    </div>
  );
};

export default App;
