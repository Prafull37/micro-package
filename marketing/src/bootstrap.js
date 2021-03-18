import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {createMemoryHistory,createBrowserHistory} from "history";
// Mount function to start up the app
const mount = (el,{onNavigate,defaultHistory}) => {
  const history=defaultHistory || createMemoryHistory();
  if(onNavigate){

    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({pathname:nextPathName}){
      const {pathname}=history.location;
        if(pathname!==nextPathName){
          history.push(nextPathName);
        }
    }
  }
};
//This comment is for new commit 
// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot,{ defaultHistory:createBrowserHistory()});
  }
}

// We are running through container
// and we should export the mount function
export { mount };
