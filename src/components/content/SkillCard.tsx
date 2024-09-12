import classes from './SkillCardModal.module.css'
import SkillCardModal from './SkillCardModal';
import CardDetails from './CardDeatils';
import { Link } from 'react-router-dom';
type SkillCardProps = {
  title: string;
  description: string;
  img: string;
  alt: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, img, alt }) => {
  return (
    <SkillCardModal>
      <img src={img} className={classes.cardImg} alt={alt} />
      <div className={`card-body ${classes.cardBody}`}>
        <CardDetails title={title} description={description} />
        <div className="d-grid gap-2 d-md-flex justify-content-center">
          <Link to="/certify" className={classes.customButton} state={{ title }}>
            Get Certified
          </Link>
        </div>
      </div>
    </SkillCardModal>
  );
};
export default SkillCard;
