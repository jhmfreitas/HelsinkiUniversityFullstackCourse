import Header from './Header';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0;
    const positive = total ? (good / total) * 100 : 0;

    if (total === 0) {
        return <> 
            <Header text="Statistics" /> 
            <p>No feedback given</p> 
        </> 
    }

    return (
        <>
        <Header text="Statistics" />
        <table>
            <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={average.toFixed(2)} />
            <StatisticLine text="positive" value={positive.toFixed(1)} suffix=" %" />
            </tbody>
        </table>
        </>
    );
};

export default Statistics;
