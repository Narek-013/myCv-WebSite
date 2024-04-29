import { useSelector } from 'react-redux';
import NavLaptop from './NavLaptop';
import NavMobile from './NavMobile';
import './navPanel.css';
import { selectMyCv } from '../../store/slices/myCvSlices';

const NavigationPanel = ({ darkLight }) => {
  const { light } = useSelector(selectMyCv);

  return (
    <div className="navigateBlock">
      <NavLaptop light={light} darkLight={darkLight} />
      <NavMobile light={light} />
    </div>
  );
};

export default NavigationPanel;
