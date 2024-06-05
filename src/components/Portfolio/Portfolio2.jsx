import img_1 from '../img/portfolioImg_1.png';
import img_2 from '../img/portfolioImg_2.png';
import img_3 from '../img/portfolioImg_3.png';
import classes from './Portfolio2.module.scss';

const Portfolio2 = () => {
    return (
        <div className={classes.portfolio}>
            <div className={classes.portfolio_item}>
                <div className={classes.portfolio_item_text} >
                <a href="" className={classes.portfolio_item_text_link}>Проекты, над которыми работали наши разработчики</a>
            <h1 className={classes.portfolio_item_text_title}>Kelvin</h1>
            <p className={classes.portfolio_item_text_text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>

                </div>
                <div className={classes.portfolio_item_img} >
                    <img src={img_1} alt="" />
                </div>
            </div>

            <div className={classes.portfolio_item}>
                <div className={classes.portfolio_item_text} >
                <a href="" className={classes.portfolio_item_text_link}>Проекты, над которыми работали наши разработчики</a>
            <h1 className={classes.portfolio_item_text_title}>Ош ТВ</h1>
            <p className={classes.portfolio_item_text_text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>

                </div>
                <div className={classes.portfolio_item_img} >
                    <img src={img_2} alt="" />
                </div>
            </div>

            <div className={classes.portfolio_item}>
                <div className={classes.portfolio_item_text} >
                <a href="" className={classes.portfolio_item_text_link}>Проекты, над которыми работали наши разработчики</a>
            <h1 className={classes.portfolio_item_text_title}>Karagay</h1>
            <p className={classes.portfolio_item_text_text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далееНу кароче там текст вроде как 123 и так далее</p>

                </div>
                <div className={classes.portfolio_item_img} >
                    <img src={img_3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Portfolio2;
