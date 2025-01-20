import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div>
      <Helmet>
        <title>Social Pod | Membership</title>
      </Helmet>
      membership
      <Link to="/payment">Pay</Link>
    </div>
  );
};

export default Membership;
