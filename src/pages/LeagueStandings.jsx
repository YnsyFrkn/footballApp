import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Container, TableBody } from "@mui/material";
import getLeaguesStandings from "../config/LeagueConfig";

function LeagueStandings() {
  const { leagueId } = useParams();
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const leaguesStandings = async () => {
      try {
        const data = await getLeaguesStandings.getLeague(leagueId);
        setStandings(data.table);
        console.log(data);
      } catch (error) {
        console.error("Hata:", error);
      }
    };
    leaguesStandings();
  }, [leagueId]);

  // Yeni: Son 5 maç durumuna göre stil döndüren fonksiyon
  const getMatchStyle = (result) => {
    switch (result) {
      case "W":
        return {
          backgroundColor: "green",
          color: "white",
          padding: "3px 0",
          borderRadius: "3px",
          width: "30px",
          justifyContent: "center",
          alignitems: "center",
          display: "flex",
          marginRight: "5px",
        };
      case "L":
        return {
          backgroundColor: "red",
          color: "white",
          width: "30px",
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          padding: "3px 0",
          borderRadius: "3px",
          marginRight: "5px",
        };
      case "D":
        return {
          backgroundColor: "gray",
          width: "30px",
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          color: "white",
          padding: "3px 0",
          borderRadius: "3px",
          marginRight: "5px",
        };
      default:
        return {};
    }
  };

  return (
    <div className="background">
      <Container maxWidth="md">
        <TableContainer>
          <Table size="medium" style={{ marginTop: "30px" }}>
            <TableHead>
              <TableRow>
                <TableCell align="right"></TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>
                  Takım
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  O
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  G
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  B
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  M
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  A
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Y
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  AV
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  P
                </TableCell>
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Son 5 Maç
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {standings.map((team) => (
                <TableRow key={team.intRank}>
                  <TableCell style={{}} align="center">
                    {team.intRank}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={team.strBadge}
                      width={"20"}
                      alt={`${team.strTeam} logo`}
                    />
                  </TableCell>
                  <TableCell style={{}} align="left">
                    {team.strTeam}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intPlayed}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intWin}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intDraw}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intLoss}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intGoalsFor}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intGoalsAgainst}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intGoalDifference}
                  </TableCell>
                  <TableCell style={{}} align="right">
                    {team.intPoints}
                  </TableCell>
                  <TableCell align="right">
                    {/* Flexbox ile son 5 maç durumunu dinamik renklendirme */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {team.strForm.split("").map((result, index) => (
                        <span key={index} style={getMatchStyle(result)}>
                          {result}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default LeagueStandings;
