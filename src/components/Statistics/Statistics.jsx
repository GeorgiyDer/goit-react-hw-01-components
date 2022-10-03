import css from 'components/Statistics/Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(stat => (
                <li className={css.item} key={stat.id}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            ))
            }
        </ul>
    </section>
)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf().isRequired
};
// function getRandomHexColor(event) {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// }