import "./App.css";
import MainPageComponent from "./main";
// react-router-dom에서 라이브러리들을 이용해 페이지구분하는 컴포넌트를 app.js에 구현
import { Switch, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";

// 실제로 코드를 작성해 페이지를 수정하는 곳은 이곳
function App() {
  return (
    <>
      <Switch>
        {/* path는 이곳에서 설정 */}
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
