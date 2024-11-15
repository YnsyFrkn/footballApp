import React from "react";
import Container from "@mui/material/Container";
import { Box, Toolbar } from "@mui/material";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="description">
        <p
          style={{
            color: "white",
            marginTop: "150px",
            fontSize: "25px",
            background: "orange",
            zIndex: "3112",
            width: "100%",
            textAlign: "center",
            padding: "50px",
          }}
        >
          "Tüm liglerdeki takımlara, maç sonuçlarına, takım istatistiklerine ve
          daha fazlasına sitemizden ulaşabilirsiniz."
        </p>
      </div>

      <div className="setFooter">
        <footer>
          <div className="edit">
            <h1>Copyright @ Football</h1>

            <h6>Furkan Yenisoy</h6>
          </div>
          <div className="icons">
            <FaInstagram
              className="instagram"
              style={{ marginRight: "15px" }}
            />
            <CiTwitter className="twitter" style={{ marginRight: "15px" }} />
            <CiFacebook className="facebook" style={{ marginRight: "15px" }} />
            <CiYoutube className="youtube" style={{ marginRight: "15px" }} />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
