import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <StHeader>
      <div className="logo">5witter</div>
      {isLogin ? (
        <Link to="/profile/" style={{ textDecoration: "none" }}>
          <div className="profile">Profile</div>
        </Link>
      ) : null}
      {/* <hr style={{ backgroundColor: "black", width: "100%", height: "1px" }} /> */}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 75px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.23);
  /* background-color: pink; */
  display: flex;
  align-items: center;
  gap: 15px;
  .logo {
    font-size: 32px;
    font-weight: bold;
  }
  .profile {
    color: royalblue;
    font-size: 30px;
    font-weight: bold;
  }
`;
