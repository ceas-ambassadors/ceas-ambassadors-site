import './sass/app.scss';

import Navigation from './components/Navigation/Navigation.js';
import { Outlet } from 'react-router-dom';
import { Row } from '@carbon/react';
import Home from './components/pages/Home';

const App = () => {
    return (
        <div className='App'>
            <div className='grid-container'>
                <Row>
                    <Navigation/>
                </Row>
            </div>
        {/* <Button kind="primary-butt
        on fuck-da-police" onClick={onc} text="buts" ></Button> */}
        <Outlet/>
        </div>
        
    );
} 

export default App;