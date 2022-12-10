import { Code, Search } from "@rsuite/icons";
import { useMediaQuery } from "react-responsive";
import {
  Header,
  Nav,
  Navbar,
  Dropdown,
  Button,
  Input,
  InputGroup,
  IconButton,
} from "rsuite";
import icon from "../assets/images/android-icon-192x192.png";

function TopPanel(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <Header>
      <Navbar appearance="subtle">
        <Navbar.Brand href="#">
          <span
            style={{ fontWeight: "bold", fontSize: "large", color: "#3B67F6" }}
          >
            <img src={icon} width="24" style={{ margin: "0 1rem 0 0" }} />
            {isBigScreen ? "Resoome Builder" : "resoome"}
          </span>
        </Navbar.Brand>

        <Nav pullRight={true}>
          {isBigScreen ? (
            <>
              <Nav.Item>
                <Button
                  appearance="ghost"
                  style={{ fontWeight: "600" }}
                  onClick={() =>
                    window.open("https://www.stravo.live/work", "_blank")
                  }
                >
                  Other Projects
                </Button>
              </Nav.Item>
              <Nav.Item disabled={true}>
                <Button
                  appearance="primary"
                  style={{ fontWeight: "600" }}
                  onClick={() =>
                    window.open("https://github.com/stravo1/resoome", "_blank")
                  }
                >
                  Github
                </Button>
              </Nav.Item>
            </>
          ) : (
            <Nav.Item disabled={true}>
              <IconButton
              icon={<Code />}
                appearance="secondary"
                style={{ fontWeight: "600" }}
                onClick={() =>
                  window.open("https://github.com/stravo1/resoome", "_blank")
                }
              >
                
              </IconButton>
            </Nav.Item>
          )}
        </Nav>
      </Navbar>
    </Header>
  );
}

export default TopPanel;
