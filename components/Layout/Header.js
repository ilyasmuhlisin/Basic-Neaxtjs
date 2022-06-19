import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";

const Header = (props) => {
  // mendapatkan path name
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Covid</title>
      </Head>
      <nav
        className="main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom"
        style={{ backgroundColor: "white" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="">
              <img src="images/" style={{ width: "100px" }} />
            </a>
          </li>
        </ul>

        <div className="container">
          <div className=",l-auto hidden-sm-down">
            <Nav
              variant="pills"
              defaultActiveKey={router.pathname == "/" ? "link-0" : "link-1"}
            >
              <Nav.Item>
                <Nav.Link eventKey="link-0" href="/">
                  Global
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" href="/indonesia">
                  Indonesia
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
