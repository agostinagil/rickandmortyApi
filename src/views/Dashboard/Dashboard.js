//for login
import * as React from "react";
import { useAuth } from "../../contexts/Auth";
const Dashboard = () => {
  const { getUserInformation } = useAuth();
  const { name } = getUserInformation();
  return (
    <>
      <h3>Hi from Dashboard {name}</h3>
    </>
  );
};

export default Dashboard;
