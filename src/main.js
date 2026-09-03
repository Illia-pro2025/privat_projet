const API_URL = "https://my-projet-production.up.railway.app/releases";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log("Base d'anime reçue :", data);
  })
  .catch((err) => {
    console.error("Erreur backend :", err);
  });
