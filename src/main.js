const API_URL = "https://api.anilibria.app/v3/title/releases";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log("Base d'anime reçue :", data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération :", error);
  });
