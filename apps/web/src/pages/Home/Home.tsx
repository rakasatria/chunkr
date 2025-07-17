import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      // Redirect authenticated users to dashboard
      navigate("/dashboard");
    } else if (!auth.isLoading) {
      // Redirect unauthenticated users to login
      auth.signinRedirect();
    }
  }, [auth.isAuthenticated, auth.isLoading, navigate, auth]);

  // Show loader while determining auth state
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Loader />
    </div>
  );
};

export default Home;