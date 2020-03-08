import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from './case/use-context/provider';
// import {UseState} from './case/use-state/use-state';
import {UseEffect} from './case/use-effect/use-effect';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

ReactDOM.render(
    <div>
        <UseEffect/>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();
