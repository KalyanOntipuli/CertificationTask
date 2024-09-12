import classes from './SkillCardModal.module.css'
const SkillCardModal: React.FC<React.PropsWithChildren<{}>> = (props) => {
    return (
        <div className="col rounded">
            <div className={`card h-100 ${classes.card}`}>
                {props.children}
            </div>
        </div>
    );
}
export default SkillCardModal