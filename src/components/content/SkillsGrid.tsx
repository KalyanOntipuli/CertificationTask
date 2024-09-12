const SkillsGrid: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-3 my-2">
            {props.children}
        </div>
    );

}
export default SkillsGrid