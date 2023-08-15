import { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {

  const { isAuthenticated, loading, user } = useContext(Context);

  console.log(user);

  if (!isAuthenticated) return <h3>Login first!!</h3>

  return (
    loading ? <Loader /> : (
      <div className="wrapper">
        <div className="profile">
          <img src="../../public/assets/profile.jpg" alt="profile_image" />
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
      </div>
    )

  )
}

export default Profile
