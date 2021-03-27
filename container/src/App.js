import React,{lazy,Suspense,useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';


const MarketingApp=lazy(()=>import('./components/MarketingApp'))
const AuthApp=lazy(()=>import('./components/AuthApp'))
import  Progress from './components/Progress';

import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignedIn,setSignIn]=useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={isSignedIn} onSignOut={()=>setSignIn(false)}/>
          <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth" >
                <AuthApp signIn={()=>setSignIn(true)}/>
                </Route>
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
