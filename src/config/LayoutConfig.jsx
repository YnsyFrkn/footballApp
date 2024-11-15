import axios from "axios";

class getAllLayout {
  API = {
    KEY: "3",
    URL: "https://www.thesportsdb.com/api/v1/json/",
  };

  getLayout(leagueId, round) {
    return axios
      .get(
        `${this.API.URL}${this.API.KEY}/eventsround.php?id=${leagueId}&r=${round}&s=2024-2025`
      )
      .then((response) => response.data)
      .catch((error) => error);
  }
}

export default new getAllLayout();
