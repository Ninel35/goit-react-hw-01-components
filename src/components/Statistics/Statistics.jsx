import css from './statistics.module.css';

const Statistics = ({ stats }) => (
    <section className="statistics">
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.stat_list}>
            {stats.map(prop => (
                <li key={prop.id} className={css.item}>
                    <span className="label">{prop.label}</span>
                    <span className="percentage">{prop.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);
export default Statistics

