import { PropsWithChildren } from "react";
import classes from './CommunityHeader.module.css'

type CommunityHeaderProps = {
    title:string
}
const CommunityHeader: React.FC<CommunityHeaderProps> = ({title}) => {
    return (
        <div className={classes.communityHeader}>
            <div className={classes.communityHeaderContent}>
                <p className={classes.itemText}>Certification Test</p>
                <h3 className={classes.headline}>{title} Role Certification Test</h3>
            </div>
        </div>
    );
}
export default CommunityHeader;