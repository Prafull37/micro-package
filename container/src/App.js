import React from "react";
import {BrowserRouter} from 'react-router-dom';
import MarketingApp from "./Composer/MarketingApp";
import Header from './component/Header';

const App=()=>{
    return <BrowserRouter>
            <div>
                <Header/>
                <MarketingApp/>
            </div>
    </BrowserRouter>
}

export default App;