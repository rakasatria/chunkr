import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Loader from "../Loader/Loader";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  

  useEffect(() => {
    const checkSession = async () => {
      try {
        if (!sessionId) return;
        
        // Simplified checkout - just redirect to dashboard
        navigate("/dashboard");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    checkSession();
  }, [sessionId, navigate]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Loader />
    </div>
  );
}
