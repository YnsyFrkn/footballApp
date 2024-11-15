import axios from "axios";

class getLeaguesStandings {
  API = {
    KEY: "3",
    URL: "https://www.thesportsdb.com/api/v1/json/",
  };

  getLeague(leagueId) {
    return axios
      .get(
        `${this.API.URL}${this.API.KEY}/lookuptable.php?l=${leagueId}&s=2024-2025`
      )
      .then((response) => response.data)
      .catch((error) => error);
  }
}

export default new getLeaguesStandings();

// https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4339&s=2024-2025
