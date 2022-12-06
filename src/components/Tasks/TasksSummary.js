import classes from './TasksSummary.module.css';

function TasksSummary () {
    return <section className={classes.summary}>
        <h2>Your list of Tasks</h2>
        <div>Select a few goals to complete today</div>
        <div>Your task-cart will refresh at midnight</div>
    </section>
}

export default TasksSummary;