import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import footballTeamService from "../config/AxiosConfig";
import { toast } from "react-toastify";
import { Box, Container, Toolbar } from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function TeamDetails() {
  const { teamName } = useParams(); // URL'den teamName parametresini al
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data = await footballTeamService.getTeam(teamName);
        if (data && data.teams) {
          setTeamInfo(data.teams[0]);
        } else {
          toast.error("Takım bilgisi bulunamadı.");
        }
      } catch (error) {
        toast.error("Hata: " + error.message);
      }
    };

    fetchTeamData();
  }, [teamName]);

  return (
    <div>
      {teamInfo ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "88.7vh", // Ekran yüksekliğini kaplar
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid lightgray",
              borderRadius: "5px",
              padding: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px",
            }}
          >
            <Toolbar disableGutters>
              <Box>
                <h1 style={{ textAlign: "center", marginTop: "10px" }}>
                  {teamInfo.strTeamAlternate}
                </h1>
                <h6
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "normal",
                    marginTop: "20px",
                  }}
                >
                  {teamInfo.strCountry}/{teamInfo.strLocation}-
                  {teamInfo.strLeague}
                </h6>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <img src={teamInfo.strEquipment} width={150} alt="Forma" />

                  <img
                    src={teamInfo.strBadge}
                    width={150}
                    style={{ marginRight: "15px" }}
                  />
                  <p style={{ marginTop: "20px" }}>
                    {teamInfo.strDescriptionEN}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <p>Stadyum Kapasitesi:{teamInfo.intStadiumCapacity}</p>
                  <p>Stadyum İsmi:{teamInfo.strStadium}</p>
                  <p>Lakap:{teamInfo.strKeywords}</p>
                </div>
              </Box>
            </Toolbar>
          </Container>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20%" }}>
          Takım bilgisi yükleniyor...
        </p>
      )}
    </div>
  );
}

export default TeamDetails;
