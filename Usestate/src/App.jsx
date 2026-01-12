import { useMemo, useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLoginDisabled = useMemo(
    () => username.length < 4 || password.length < 4,
    [username, password]
  );

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  console.log(username, password, isLoginDisabled);

  return (
    <form>
      <h1>Form</h1>
      <input type="username" value={username} onChange={handleUsernameChange} />
      <br />
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button disabled={isLoginDisabled}>Login</button>
    </form>
  );
};

export default App;
