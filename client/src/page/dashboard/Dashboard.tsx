import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkUser } from "../../api/checkUser";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  console.log("-------->", localStorage.getItem("token"));

  useEffect(() => {
    const fecthData = async () => {
      const token = localStorage.getItem("token");
      console.log(token);

      if (!token) {
        navigate("/sing-in");
      } else if (userid) {
        const response = await checkUser(userid);
        console.log("-->r", response.succes);
        if (!response.succes) {
          navigate("/sing-in");
        }
      }
    };
    fecthData();
  }, [navigate]);

  return (
    <div
      style={{
        fontSize: "150px",
        color: "red",
        width: "100%",
        margin: "0",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      dashboard
    </div>
  );
};
