import { useHistory } from "react-router-dom";

const Aside = () => {
  const history = useHistory();
  return (
    <aside className="aside">
      <button>Products</button>
      <button>Company Profile</button>
      <button onClick={() => history.push("./")}>Logout</button>
    </aside>
  );
};

export default Aside;
