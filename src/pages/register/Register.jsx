import { Link } from "react-router-dom";
import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>React Social</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            laborum quo porro. Nam illo ipsam, earum culpa cupiditate ratione
            voluptatem facilis. Omnis dignissimos dicta repudiandae, nostrum
            consequuntur voluptatibus tenetur vero.50
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
