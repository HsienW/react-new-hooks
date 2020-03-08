import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from './case/use-context/provider';
import {UseState} from './case/use-state/use-state';
import * as serviceWorker from './common/serviceWorker';
import './style/index.css';

ReactDOM.render(
    <div>
        <UseState/>
    </div>
    , document.getElementById('root'));
serviceWorker.unregister();
