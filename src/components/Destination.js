import DestinationData from './DestinationData';
import './DestinationStyle.css';
import Banner4 from '../img/banner4.jpg';
import Banner3 from '../img/banner3.jpg';
import Banner2 from '../img/banner2.jpeg';
import Banner1 from '../img/banner1.jpg';

import { useTranslation } from 'react-i18next';

const Destination = () => {
    const { t } = useTranslation();
    return ( 
        <div className="destination" id='destination'>
            <h1>{t("home-description.dest-title")}</h1>
            <p>{t("home-description.dest-title-under-text")}</p>
            <DestinationData
            cName="first-des"
            heading={t("home-description.first-h2")}
            text={t("home-description.second-p")}
            img1={Banner2}
            img2={Banner3}
            />
            <DestinationData
            cName="first-des-reverse"
            heading={t("home-description.second-h2")}
            text={t("home-description.second-p")}
            img1={Banner1}
            img2={Banner4}
            />
        </div>
     );
}
 
export default Destination;