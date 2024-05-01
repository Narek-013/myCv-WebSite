import MainInfo from "../Main/MainInfo";
import { images } from "../../../Images/Images";


const HomePageHeader = () => {

  return (
    <div className="main">
      <MainInfo  />
      <div className="herroImg">
        <img src={images.user} alt="#" />
      </div>
    </div>
  );
};

export default HomePageHeader;
