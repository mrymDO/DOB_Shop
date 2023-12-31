import styles from "./styles.module.css";
import userIcon from "./../../assets/svg/user-icon.svg";
import shoppingCartIcon from "./../../assets/svg/shoppin-cart-icon.svg";
import SearchInput from "../searchInput/SearchInput";
import Logo from "../logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/categoryApi";
import Loader from "../loader/Loader";
import ForUser from "../authComponents/ForUser";
import ForGuest from "../authComponents/ForGuest";
import Button from "../button/Button";
import { useAuth } from "../../contexts/auth/authContext";

function Header() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const navigate = useNavigate();

  const { logout } = useAuth();
  async function handleLogout() {
    await logout();
    navigate("/");
  }
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.logo}>
        <Logo />
        <div className={styles.category}>
          <span>Categories</span>
          {isLoading && <Loader />}

          <ul>
            {!isLoading &&
              data.map((category) => {
                if (category.products.length > 0)
                  return (
                    <li key={category.id}>
                      <Link to={`/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  );
                return null;
              })}
          </ul>
        </div>
      </div>
      <SearchInput />
      <div className={styles["header__actions"]}>
        <ForGuest>
          <Link to="/login">
            <img src={userIcon} alt="" />
          </Link>
        </ForGuest>
        <ForUser>
          <Link to="/cart">
            <img src={shoppingCartIcon} alt="" />
          </Link>
          <Button className={["btn", "primary"]} onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </Button>
        </ForUser>
      </div>
    </header>
  );
}

export default Header;
