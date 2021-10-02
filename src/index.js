import "antd/dist/antd.css";
import store from "app/store";
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.scss";

const appId = "naWiDfPMwFED9Trn7BzFddWZGt1wJhMr9CuJPTOf";
const serverUrl = "https://emqjtwjdoumi.moralishost.com:2053/server";

ReactDOM.render(
	<React.StrictMode>
		<MoralisProvider appId={appId} serverUrl={serverUrl}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</MoralisProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
