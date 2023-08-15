
const TodoItem = ({ title, description, createdAt, isCompleted }) => {
    return (
        <div className="todo">
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{createdAt}</span>
            </div>
            <div className="div2">
                <input type="checkbox" />
                <button>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
