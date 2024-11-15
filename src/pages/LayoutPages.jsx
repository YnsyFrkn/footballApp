import React, { useEffect, useState } from "react";
import getAllLayout from "../config/LayoutConfig";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { toast } from "react-toastify";

function LayoutPages() {
  const { leagueId } = useParams();
  const [layout, setLayout] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(1); // Varsayılan olarak 1. haftayı seç

  useEffect(() => {
    const fetchLayout = async (week) => {
      try {
        const data = await getAllLayout.getLayout(leagueId, week);
        if (data && data.events) {
          setLayout(data.events);
        } else {
          toast.error("Fikstür verisi alınamadı.");
        }
      } catch (error) {
        toast.error("Hata oluştu: " + error.message);
      }
    };

    // İlk açılışta varsayılan haftayı yükle
    fetchLayout(selectedWeek);
  }, [leagueId, selectedWeek]);

  // Haftaları oluştur
  const weeks = Array.from({ length: 38 }, (_, i) => i + 1);

  // Tarihten gün ismini almak için yardımcı fonksiyon
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long" }; // Gün ismini uzun formatta al
    return date.toLocaleDateString("tr-TR", options); // Türkçe format
  };

  return (
    <div className="background">
      <Container maxWidth="md">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label style={{ marginTop: "20px" }} htmlFor="week-select">
            Hafta Seçin:
          </label>
          <select
            id="week-select"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(Number(e.target.value))} // Seçilen haftayı güncelle
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
              outline: "0",
            }}
          >
            {weeks.map((week) => (
              <option key={week} value={week}>
                {week}.Hafta
              </option>
            ))}
          </select>
        </div>

        <div>
          {layout.length > 0 ? (
            layout.map((event, index) => (
              <div key={index} style={{ padding: "10px" }}>
                {/* Maçın tarihi, günü ve saati */}
                <h5
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "6px",
                    alignItems: "center",
                  }}
                >
                  <div style={{}}>
                    {event.dateEvent} - {getDayName(event.dateEvent)}
                  </div>
                  {/* {event.strTimeLocal} */}
                </h5>
                <hr />
                <div className="public" style={{ padding: "5px" }}>
                  <div
                    className="time-status"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <p
                      title="Maç Sonucu"
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      {event.strStatus}
                    </p>
                  </div>
                  <div
                    className="homeAway"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "50px",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      className="homeTeam"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "10px",
                        width: "50%",
                      }}
                    >
                      {event.strHomeTeam}
                      <img
                        src={event.strHomeTeamBadge}
                        width={30}
                        alt={`${event.strHomeTeam} logo`}
                      />
                    </div>
                    <div
                      className="score"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "5%",
                      }}
                    >
                      {event.intHomeScore}-{event.intAwayScore}
                    </div>
                    <div
                      className="awayTeam"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "10px",
                        width: "50%",
                      }}
                    >
                      <img
                        src={event.strAwayTeamBadge}
                        width={30}
                        alt={`${event.strAwayTeam} logo`}
                      />
                      {event.strAwayTeam}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Bu haftaya ait maç bulunmamaktadır.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default LayoutPages;
