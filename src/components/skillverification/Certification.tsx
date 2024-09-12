import CommunityHeader from "./CommunityHeader";
import CommunityContent from "./CommunityContent";

import { useLocation } from 'react-router-dom';
const Certification: React.FC = () => {
    const location = useLocation();
    const { title } = location.state || {}; // Access the passed state
    return (
        <>
            <CommunityHeader title={title} />
            <CommunityContent title={title} />
        </>

    );
}

export default Certification