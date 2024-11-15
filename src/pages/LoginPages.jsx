import React from "react";
import Container from "@mui/material/Container";
import { Box, Toolbar } from "@mui/material";
import loginPageImage from "../assets/loginpage1.png";
import Footer from "../components/Footer";

function LoginPages() {
  return (
    <div className="main">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="stepOne">
            <Box>
              <img src={loginPageImage} width={400} />
            </Box>
            <Box className="text-setting">
              <p>
                Takımlarınızı takip edin, en son haberleri alın ve unutulmaz
                anları paylaşın. Hızla gelişen futbol dünyasında yerinizi alın
                ve oyun ruhunu yeniden keşfedin. Hemen giriş yapın, futbol
                tutkunuza bir adım daha yaklaşın!
              </p>
            </Box>
          </div>
        </Toolbar>
      </Container>
      <Box sx={{ marginTop: "428px" }}>
        <Footer />
      </Box>
    </div>
  );
}

export default LoginPages;
