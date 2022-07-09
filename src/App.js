import './sass/app.scss';
import Navigation from './components/Navigation/Navigation.js';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div>
        <Navigation></Navigation>
        {/* <Button kind="primary-butt
        on fuck-da-police" onClick={onc} text="buts" ></Button> */}
        <Outlet/>
        </div>
    );
} 

export default App;