import ReactDOM from "react-dom";
import {
    HashRouter as Router,
} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.render(
    <Router>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </Router>,
    document.getElementById("root"),
);

serviceWorker.unregister();
