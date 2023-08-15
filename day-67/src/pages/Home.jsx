import { useEffect, useState } from "react"
import axios from "axios"
import { server } from "../main"
import toast from "react-hot-toast"
import TodoItem from "../components/TodoItem"

const Home = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`${server}/task/new`, {
        title, description,
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
      setTitle("");
      setDescription("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    axios.get(`${server}/task/my`, {
      withCredentials: true,
    }).then((res) => {
      setTasks(res.data.tasks);
      console.log(tasks)
    }).catch((err) => {
      toast.error(err.response.data.message);
    });
  }, []);

  return (
    <div className="container">
      <section className="todosContainer">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Add a Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Add a Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button disabled={loading} type="submit">Add Task</button>
        </form>
      </section>

      <section className="todoItems">
        {
          tasks.map(i => (
            <TodoItem key={i._id}
              title={i.title}
              description={i.description}
              createdAt={i.createdAt}
              isCompleted={i.isCompleted}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Home
