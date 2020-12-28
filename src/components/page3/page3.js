import classes from './App3.module.css';
import {Menu} from './components/menu/menu';


function page3() {
  return (
      <div className={classes.app}>
          <Menu/>
          <div className={classes.content_center}>
              <span className={classes.span_header}>Try now!</span>
              <span className={classes.span_header_second}>What can we do for you?</span>
              <span className={classes.span_text}>Improve results during all potential and real customer life cycle</span>
              <div className={classes.button_create}>Create New Project</div>
          </div>
          <div className={classes.help_center}>
              <span className={classes.span_header_second}>Help Center</span>
              <span className={classes.span_text}>If you have any questions, contact us!</span>
              <div className={classes.button_contact}>Contact us</div>
          </div>
      </div>
  );
}

export default page3;
