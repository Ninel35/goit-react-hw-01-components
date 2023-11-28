import css from './statistics.module.css';

const Statistics = (props) => (
    <section className="statistics">
        {props.title && <h2 className={css.title}>{props.title }</h2>}
        <ul className={css.stat_list}>
            {props.stats.map(prop => (
                <li key={prop.id} className={css.item}>
                    <span className="label">{prop.label}</span>
                    <span className="percentage">{prop.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);
export default Statistics

