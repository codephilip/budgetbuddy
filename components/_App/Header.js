import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { handleLogout } from "../../utils/auth";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            Budget Buddy
          </Menu.Item>
        </Link>

        <Link href="/about">
          <Menu.Item header active={isActive("/about")}>
            About
          </Menu.Item>
        </Link>

        {isRootOrAdmin && (
          <Link href="/create">
            <Menu.Item header active={isActive("/create")}>

              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href="/budget">
              <Menu.Item header active={isActive("/budget")}>
                MyBudget
              </Menu.Item>
            </Link>
            <Link href="/summary">
              <Menu.Item header active={isActive("/summary")}>
                Summary
              </Menu.Item>
            </Link>
            <Link href="/transactions">
            <Menu.Item header active={isActive("/transactions")}>
              Transactions
            </Menu.Item>
          </Link>


          <Menu.Item onClick={handleLogout} header>
            <Icon name="sign out" size="large" />
            Logout
          </Menu.Item>
        </>
        ) : (
          <>
            <Link href="/login">
              <Menu.Item header active={isActive("/login")}>
                <Icon name="sign in" size="large" />
                Login
              </Menu.Item>
            </Link>

            <Link href="/signup">
              <Menu.Item header active={isActive("/signup")}>
                <Icon name="signup" size="large" />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
