import React from "react";
// Button
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
// Menu
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/SubMenu";
//Icon
import Icon from "./components/Icon/icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; //引入所有图标
//input
import { Input } from "./components/input/input";
//upload
import { Upload } from "./components/Upload/upload";
library.add(fas);
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
        <hr />
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
              <MenuItem>aaa</MenuItem>
              <MenuItem>bbb</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <hr />
        {/* icon */}
        <div>
          <Icon icon="arrow-up" theme="primary" size="10x"></Icon>
          <Icon icon="arrow-down" theme="danger" size="10x"></Icon>
          <Icon icon="coffee" theme="danger" size="10x"></Icon>
        </div>
        <hr />
        <div>
          {/* input */}
          <Input
            style={{ width: "300px" }}
            placeholder="input with icon"
            icon="search"
          />
          <Input
            style={{ width: "300px" }}
            defaultValue="large size"
            size="lg"
          />
          <Input
            style={{ width: "300px" }}
            placeholder="small size"
            size="sm"
          />
          <Input
            style={{ width: "300px" }}
            defaultValue="prepend text"
            prepend="https://"
          />
          <Input
            style={{ width: "300px" }}
            defaultValue="google"
            append=".com"
          />
        </div>
        <hr />
        {/* Upaload */}
        <div>
          <Upload
            action="url"
            onProgress={() => {}}
            onChange={() => {}}
            onSuccess={() => {}}
            onError={() => {}}
          >
            <Button>上传</Button>
          </Upload>
        </div>
      </header>
    </div>
  );
};

export default App;
