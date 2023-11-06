import { Link } from "react-router-dom";
import FormInput from "../../components/formInput/FormInput";
import styles from "./styles.module.css";
import Button from "../../components/button/Button";
import Alert from "../../components/alert/Alert";
import Text from "../../components/text/Text";
import Form from "../../components/form/Form";
import { validatePassword, validateUsername } from "./utlis/validation";
import { useInput } from "./hooks/useInput";
import { useLogin } from "./hooks/useLogin";
function Login() {
  const username = useInput("", validateUsername);
  const password = useInput("", validatePassword);
  const { isLoading, error, onSubmit } = useLogin(username, password);
  return (
    <Form onSubmit={onSubmit}>
      <h2 className={styles.title}>log in to your account</h2>
      <Alert type="error">{error}</Alert>
      <FormInput
        htmlFor="username"
        type="text"
        placeholder="Username"
        name="Username"
        state={username}
      >
        {username.isBlured && !username.isValid && (
          <Text type="error">Please Enter Your Username</Text>
        )}
      </FormInput>
      <FormInput
        htmlFor="Password"
        type="text"
        placeholder="Password"
        name="Password"
        state={password}
      >
        {password.isBlured && !password.isValid && (
          <Text type="error">Password Too Short</Text>
        )}
        <Link to="#" className={styles.link}>
          I forgot my password
        </Link>
      </FormInput>
      <Button
        type="submit"
        className={["primary", "block", "margin-b-2", styles.submitBtn]}
      >
        {isLoading ? "Login..." : "Login"}
      </Button>
      <p className={`${styles.text} text-center`}>
        don&apos;t have an account ?{" "}
        <Link to="#" className={styles.link}>
          Sign in
        </Link>
      </p>
    </Form>
  );
}

export default Login;
