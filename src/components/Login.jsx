import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";

function LogIn() {
  const { handleLogin, loginInfo, setLoginInfo } = useContext(UserContext);

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };

//   const { email, password } = loginInfo;

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <FloatingLabel
          onChange={handleChange}
          controlId="email"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          onChange={handleChange}
          controlId="password"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <a href="/signup" className="signup-link ms-2">
          First time? Create an account.
        </a>
      </Form>
    </div>
  );
}

export default LogIn;
