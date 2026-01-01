import { useNavigate } from "react-router-dom";
import MobileFrame from "@/components/MobileFrame";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-popx-yellow opacity-60"></div>
        <div className="absolute -top-8 left-24 w-32 h-32 rounded-full bg-popx-purple opacity-30"></div>
        <div className="absolute top-8 -right-8 w-40 h-40 rounded-full bg-popx-pink opacity-40"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 bg-background">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/create-account")}
          className="w-full h-12 bg-popx-purple text-white font-medium rounded-md mb-3 hover:bg-popx-purple/90 transition-colors"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full h-12 bg-popx-light-purple text-foreground font-medium rounded-md hover:bg-popx-light-purple/80 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </MobileFrame>
  );
};

export default Landing;
