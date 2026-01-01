import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "@/components/MobileFrame";
import FloatingInput from "@/components/FloatingInput";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <MobileFrame>
      <div className="p-6 pt-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="space-y-5">
          <FloatingInput
            label="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
          />

          <FloatingInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full h-12 bg-popx-gray text-white font-medium rounded-md mt-6 hover:bg-popx-gray/90 transition-colors"
        >
          Login
        </button>
      </div>
    </MobileFrame>
  );
};

export default Login;
