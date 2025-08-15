import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to cake page on load
    navigate('/cake');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-sunset flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text">Loading your celebration...</h1>
      </div>
    </div>
  );
};

export default Index;
