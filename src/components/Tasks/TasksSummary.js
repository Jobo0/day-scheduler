import classes from './TasksSummary.module.css';

function TasksSummary () {
    return <section className={classes.summary}>
        <h2>Your list of Tasks</h2>
        <div>Select and create tasks to complete today</div>
        <div>Click "Begin" in the cart menu to begin your schedule!</div>
        <div>Your task-cart will refresh at midnight</div>
    </section>
}

export default TasksSummary;