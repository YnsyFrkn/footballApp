import axios from "axios";

class footballTeamService {
  API = {
    KEY: "3",
    URL: "https://www.thesportsdb.com/api/v1/json/",
  };

  getTeam(searchTeam) {
    return axios
      .get(`${this.API.URL}${this.API.KEY}/searchteams.php?t=${searchTeam}`)
      .then((response) => response.data)
      .catch((error) => error);
  }
}

export default new footballTeamService();
