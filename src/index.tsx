import { render } from "preact";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "wouter";
import { useRoute } from "wouter";
const UserRoute = () => {
  // `match` is boolean
  const [match, params] = useRoute<{ username: string }>("/users/:username");
  if (match) {
    return <div>Hello, {params.username}!</div>;
  }
  return null;
};

export function App() {
  return (
    <div>
      <Route path="/users/:username">
        <UserRoute />
      </Route>
      HEy
    </div>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);
