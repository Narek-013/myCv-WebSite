import NavLaptop from './NavLaptop';
import NavMobile from './NavMobile';
import './navPanel.css';

const NavigationPanel = () => {


    return (
      <div className="navigateBlock">
        <NavLaptop/>
        <NavMobile/>
      </div>
    );
}

export default NavigationPanel;
