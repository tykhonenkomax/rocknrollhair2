import React from 'react';

import {Layout} from 'components/Layout/Layout';
import './App.css';
import {configs} from './configs/configs'


function App() {

    return (
        <div className='wrapper'>
            <Layout information={configs.information}
                    services={configs.services}
                    price={configs.price}
                    time={configs.time}
            />
        </div>
    );
}

export default App;
