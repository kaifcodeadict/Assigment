import React, { useState } from "react";
import "./Home.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import SVG from "../Assets/Group348.svg";
import Faqlogo from "../Assets/faq.svg";
import Guidlogo from "../Assets/guide.svg";
import Chatlogo from "../Assets/chat.svg";
import Sociallogo from "../Assets/social.svg";
import Maillogo from "../Assets/Vector.svg";
import Arrowlogo from "../Assets/Vector-1.svg";
import TelegramLogo from "../Assets/telegram.svg";
import WhatsappLogo from "../Assets/whatsapp.svg";
import LivechatLogo from "../Assets/livechat.svg";
import FacebookLogo from "../Assets/faacebook.png";
import InstaLogo from "../Assets/insta.png";
import TwitterLogo from "../Assets/twitter.png";
import LinkedLogo from "../Assets/Group.png";

function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordStyle = {
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.12)",
    borderRadius: "11px",
    // height: "117px",
    padding: "1.5rem 2.5rem",
    width: "100%",
  };

  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // for form submit
  };
  return (
    <div className="Home">
      <div className="backgroundImg">
        <img src={SVG} alt="" />
      </div>
      <div className="homeContainer">
        <div className="homeHeader">
          <h1 className="homeTitle">Hello, how can we help you?</h1>
          <span className="homeSubtitle">Find Travel guide, FAQ, chat</span>
        </div>
        <div className="homeContent">
          <div className="homeAbout">
            <Card
              sx={{ ...accordStyle, display: "flex", alignItems: "center" }}
            >
              <img src={Faqlogo} alt="" />
              <div className="accordText">
                <h1 className="accordTitle">FAQ</h1>
                <span className="accordSubtitle">
                  Lorem, ipsum dolor sit amet{" "}
                </span>
              </div>
            </Card>
            <Card
              sx={{ ...accordStyle, display: "flex", alignItems: "center" }}
            >
              <img src={Guidlogo} alt="" />
              <div className="accordText">
                <h1 className="accordTitle">Travel Guide</h1>
                <span className="accordSubtitle">
                  Lorem, ipsum dolor sit amet{" "}
                </span>
              </div>
            </Card>
          </div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={accordStyle}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <img src={Chatlogo} alt="" />
              <div className="accordText">
                <h1 className="accordTitle">Chat</h1>
                <span className="accordSubtitle">
                  Lorem, ipsum dolor sit amet{" "}
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="chatContainer">
                <div className="chatContent">
                  <img src={TelegramLogo} alt="" className="chatLogo" />
                  <h1 className="chatlogotitle">Telegram</h1>
                </div>
                <div className="chatContent">
                  <img src={WhatsappLogo} alt="" className="chatLogo" />
                  <h1 className="chatlogotitle">whatsApp</h1>
                </div>
                <div className="chatContent">
                  <img src={LivechatLogo} alt="" className="chatLogo" />
                  <h1 className="chatlogotitle">Live chat</h1>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            style={accordStyle}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <img src={Sociallogo} alt="" />
              <div className="accordText">
                <h1 className="accordTitle">Social</h1>
                <span className="accordSubtitle">
                  Lorem, ipsum dolor sit amet{" "}
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="chatContainer">
                <div className="chatContent">
                  <img src={FacebookLogo} alt="" className="chatLogo" />
                </div>
                <div className="chatContent">
                  <img src={InstaLogo} alt="" className="chatLogo" />
                </div>
                <div className="chatContent">
                  <img src={TwitterLogo} alt="" className="chatLogo" />
                </div>
                <div className="chatContent">
                  <img src={LinkedLogo} alt="" className="chatLogo" />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            style={accordStyle}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <div
                className="QuarylogoContainer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                }}
              >
                <img src={Arrowlogo} alt="" />
                <img src={Maillogo} alt="" />
              </div>
              <div className="accordText">
                <h1 className="accordTitle">Send Query</h1>
                <span className="accordSubtitle">
                  Lorem, ipsum dolor sit amet{" "}
                </span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="queryForm">
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <div className="nameNumber">
                    <label htmlFor="name">Name</label>
                    <label htmlFor="number">Phone number</label>
                    <input
                      type="text"
                      className="contactName"
                      required
                      name="name"
                      id=""
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      className="contactNumber"
                      name="number"
                      required
                      onChange={(e) =>
                        setForm({ ...form, number: e.target.value })
                      }
                      id=""
                    />
                  </div>
                  <div className="nameNumber">
                    <label htmlFor="subject">Subject</label>
                    <label htmlFor="order">Order no.</label>
                    <input
                      type="text"
                      className="subject"
                      name="subject"
                      id=""
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      className="subject"
                      name="subject"
                      id=""
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                    />
                  </div>
                  <label htmlFor="query">Your Query</label>
                  <input
                    type="text"
                    className="query"
                    name="query"
                    required
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    id=""
                  />
                  <div className="formButton">
                    <button className="formBtn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Home;
