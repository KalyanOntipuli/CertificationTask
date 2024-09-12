import classes from './FAQ.module.css';
import { accordionData } from '../../util/faq';
import Accordion from './Accordion';
import { useState } from 'react';

type AccordionData = {
    title: string;
    content: string;
};
const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className={classes['faq-section']}>
            <h2>Frequently Asked Questions</h2>
            <div className={classes['faq-container']}>
                {accordionData.map(({ title, content }: AccordionData, index) => (
                    <Accordion
                        key={index}
                        title={title}
                        content={content}
                        isActive={activeIndex === index}
                        onClick={() => handleAccordionClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
