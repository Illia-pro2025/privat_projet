const API_URL = "http://localhost:3000/anime";
fetch(API_URL).then((response)=>{
    if (!response.ok) throw new Error(`Erreur r\xe9seau: ${response.status}`);
    return response.json();
}).then((data)=>{
    console.log("Base d'anime re\xe7ue :", data);
}).catch((error)=>{
    console.error("Erreur lors de la r\xe9cup\xe9ration :", error);
});

//# sourceMappingURL=projec priver.de158e3a.js.map
