import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from "../assets/logo1.png";
import { toast } from "react-toastify";
import footballTeamService from "../config/AxiosConfig";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [teamInfo, setTeamInfo] = useState(null);
  const [anchor, setAnchor] = useState(null);
  const [layout, setLayout] = useState(null);

  const getSeacrhTeam = async (searchTeam) => {
    const trimmedSearch = searchTeam.trim(); // Arama terimini trim ile boşluklardan temizle
    if (trimmedSearch) {
      try {
        const data = await footballTeamService.getTeam(trimmedSearch);
        console.log("API'den alınan veri:", data);

        if (!data || !data.teams) {
          toast.error("Hatalı arama:Takım bulunamadı.");
          setTeamInfo(null);
          return;
        } else {
          setTeamInfo(data);
          setSearch("");
          toast.success("Takım bulundu!"); // Başarılı arama mesajı

          //Takım dety sayfasına yönlendirme
          navigate(`/team/${trimmedSearch}`); // Burada trimmedSearch kullanıyoruz
        }
      } catch (error) {
        toast.error("Hata oluştu: " + error.message);
      }
    } else {
      toast.warn("Lütfen geçerli bir takım adı girin.");
    }
  };

  const handleClick = () => {
    getSeacrhTeam(search); // Arama butonuna tıklanıldığında getSeacrhTeam çağrılır
  };

  // menü LIGLER işlemleri
  const handleBtnClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleLeagueSelect = (leagueId) => {
    handleClose(); // Menü kapat
    navigate(`/league/${leagueId}`); // İlgili lige yönlendirme yap
  };

  //fikstür işlemleri
  const layoutHandleBtnClick = (e) => {
    setLayout(e.currentTarget); // Bu, #parent öğesini verir
    // console.log(true);
    // console.log(e.target); //Bu, tıklanan öğeyi verir (#child)
  };

  const handleClosee = () => {
    setLayout(null);
  };
  const handleLayoutSelect = (leagueId) => {
    handleClosee(); // Menü kapat
    navigate(`/layout/${leagueId}`); // İlgili lige yönlendirme yap
  };

  return (
    <AppBar position="static" color="white">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <div className="navbar">
            <div className="logo">
              <Box component="header" sx={{ flexGrow: 1 }}>
                <a href="/">
                  <img src={logo} alt="logo" width="100px" height="100px" />
                </a>
              </Box>
            </div>

            {/* Navigation Links */}
            <div className="link">
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Button color="inherit" href="/">
                  Anasayfa
                </Button>

                <Button color="inherit" onClick={handleBtnClick}>
                  Puan durumu
                </Button>
                <Menu
                  anchorEl={anchor}
                  open={Boolean(anchor)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => handleLeagueSelect(4339)}>
                    Süper Lig
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4328)}>
                    Premier Lig
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4335)}>
                    La Liga
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4331)}>
                    Bundesliga
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4332)}>
                    Seria A
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4334)}>
                    Ligue 1
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4344)}>
                    Portekiz Süper Ligi
                  </MenuItem>
                  <MenuItem onClick={() => handleLeagueSelect(4337)}>
                    Eredivisie
                  </MenuItem>
                </Menu>

                <Button color="inherit" onClick={layoutHandleBtnClick}>
                  Fikstur
                </Button>

                <Menu
                  anchorEl={layout}
                  open={Boolean(layout)}
                  onClose={handleClosee}
                >
                  <MenuItem onClick={() => handleLayoutSelect(4339)}>
                    Süper Lig
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4328)}>
                    Premier Lig
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4335)}>
                    La Liga
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4331)}>
                    Bundesliga
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4332)}>
                    Seria A
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4334)}>
                    Ligue 1
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4344)}>
                    Portekiz Süper Ligi
                  </MenuItem>
                  <MenuItem onClick={() => handleLayoutSelect(4337)}>
                    Eredivisie
                  </MenuItem>
                </Menu>
              </Box>
            </div>

            {/* Search Bar */}
            <div className="search-btn">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ border: "1px solid lightgray" }}
                type="search"
                placeholder="Takım Ara..."
                autoComplete="off"
              />
              <Button onClick={handleClick} size="medium" variant="text">
                Ara
              </Button>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
