import { useHistory } from "react-router-dom";

const Aside = () => {
  const history = useHistory();
  return (
    <aside className="aside">
      <button onClick={() => history.push("./admin")}>Products</button>
      <button onClick={() => history.push("./companyProfile")}>Company Profile</button>
      <button onClick={() => history.push("./")}>Logout</button>
    </aside>
  );
};

export default Aside;
