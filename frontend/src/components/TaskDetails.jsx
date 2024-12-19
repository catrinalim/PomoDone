const TaskDetails = ({ task }) => {
    return (
        <div className="task-details">
            <h4>{task.title}</h4>
            <p><strong>Weight: </strong>{task.weight}</p>
            <p>{task.createdAt}</p>
        </div>
    )
}

export default TaskDetails