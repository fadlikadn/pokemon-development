import ReactDOM from "react-dom";
import {
    HashRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { configureStore } from "./store/store";

ReactDOM.render(
    <Provider store={configureStore}>
        <Router>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </Router>
    </Provider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
