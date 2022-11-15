import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// for react 18
// import {createRoot} from 'react-dom/client'

ReactDOM.render(
    <React.StrictMode>

        {/*<BrowserRouter>*/}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById("root")
);


// for react 18
// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)