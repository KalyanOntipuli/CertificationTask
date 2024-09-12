import classes from './CommunityContent.module.css';
import certificate from '../../util/certificate.png';
import { Button } from 'react-bootstrap';
import CommunityContentModel from './CommunityContentModel';
type CommunityContentType = {
    title: string;
}
const CommunityContent: React.FC<CommunityContentType> = ({ title }) => {
    return (
        <CommunityContentModel>
            <div className={classes.skillsVerificationHeaderText}>
                <h1 className={classes.skillsVerificationHeading}>
                    Verify your {title} Skills. Accelerate your Job Search.
                </h1>
                <p className={classes.skillsVerificationText}>
                    Take the Maang Certification Test and showcase your knowledge as a Maang verified developer.
                </p>
                <Button variant="success">Take The Maang Role Test</Button>{''}
            </div>
            <img src={certificate} className={classes.skillsVerificationHeaderImage} alt="Certificate" />
        </CommunityContentModel >
    );
};

export default CommunityContent;
