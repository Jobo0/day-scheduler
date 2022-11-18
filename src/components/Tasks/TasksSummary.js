import classes from './TasksSummary.module.css';

function TasksSummary () {
    return <section className={classes.summary}>
        <h2>List of available tasks</h2>
        <div>Select a few goals to complete today </div>
    </section>
}

export default TasksSummary;