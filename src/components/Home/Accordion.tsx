import classes from './Accordion.module.css'
type AccordionProps = {
    title: string;
    content: string;
    isActive: boolean;
    onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, isActive, onClick }) => {
    return (
        <div className={classes['faq-item']}>
            <div className={classes['faq-question']} onClick={onClick}>
                <span>{title}</span>
                <span className={classes['click-button']}>{isActive ? '-' : '+'}</span>
            </div>
            {isActive && <div className={classes['faq-answer']}>
                <p>{content}</p>
            </div>
            }
        </div>
    );
};

export default Accordion;
