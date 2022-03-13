import filmsIcon from '../../assets/films.png';
import hateStory2 from '../../assets/hate-story-2.png';
import hateStory3 from '../../assets/hate-story-3.png';
import beimaanLove from '../../assets/beimaan-love.png';
import kiAndka from '../../assets/ki-&-ka.png';
import baahubaliTheBeginning from '../../assets/baahubali-the-beginning.png';

import classes from './Films.module.css';

const Films = () => {
  return (
    <div className={classes.films}>
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.icon} src={filmsIcon} />
          <div className={classes['title-text']}>
            <div className={classes['title-primary']}>Movies & shows</div>
            <div className={classes['title-secondary']}>
              Watch the latest and greatest hits
            </div>
          </div>
        </div>
        <div className={classes.tabs}>
          <span className={classes.selected}>BROWSE</span>
          <span>PURCHASED</span>
        </div>
      </div>
      <div className={classes['movies-section']}>
        <div className={classes['section-title']}>
          Recommended movies for you
        </div>
        <div className={classes['movies-list']}>
          <div>
            <img className={classes['movie__poster']} src={hateStory2} />
            <div className={classes['movie__title']}>Hate story 2</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img className={classes['movie__poster']} src={hateStory3} />
            <div className={classes['movie__title']}>Hate story 3</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img className={classes['movie__poster']} src={beimaanLove} />
            <div className={classes['movie__title']}>Beimaan Love</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img className={classes['movie__poster']} src={kiAndka} />
            <div className={classes['movie__title']}>Ki & Ka</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img
              className={classes['movie__poster']}
              src={baahubaliTheBeginning}
            />
            <div className={classes['movie__title']}>
              Baahubali: The Beginning
            </div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
        </div>
      </div>
      <div className={classes['movies-section']}>
        <div className={classes['section-title']}>Top Selling</div>
        <div className={classes['movies-list']}>
          <div>
            <img className={classes['movie__poster']} src={hateStory2} />
            <div className={classes['movie__title']}>Hate story 2</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img className={classes['movie__poster']} src={hateStory3} />
            <div className={classes['movie__title']}>Hate story 3</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img className={classes['movie__poster']} src={beimaanLove} />
            <div className={classes['movie__title']}>Beimaan Love</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img className={classes['movie__poster']} src={kiAndka} />
            <div className={classes['movie__title']}>Ki & Ka</div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
          <div>
            <img
              className={classes['movie__poster']}
              src={baahubaliTheBeginning}
            />
            <div className={classes['movie__title']}>
              Baahubali: The Beginning
            </div>
            <button className={classes['cta-btn']}>Buy or rent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
