import classes from './CommunityContentModel.module.css'
const CommunityContentModel: React.FC<React.PropsWithChildren> = (props,children) => {
    return (
        
            <div className={classes.communityContent}>
                <div className={classes.skillsVerification}>
                    <header className={classes.skillsVerificationHeaderBg}>
                        <div className={classes.container}>
                            {props.children}
                        </div>
                    </header>
                </div>
            </div>
        );
}
export default CommunityContentModel