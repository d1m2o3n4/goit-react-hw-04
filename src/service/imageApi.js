// import axios from "axios";
// export async function getPhotos(query, page) {
//   const API_KEY = "kLFhBUAUjAoMnxI27HOw9RC-ePcs04dVIl92cDY2-dM";
//   const baseUrl = "https://api.unsplash.com/";

import axios from "axios";

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: "photo",
//     orientation: "portrait",
//     page,
//     per_page: 15,
//     safesearch: true,
//   });

//   return await axios.get(`${baseUrl}/?${params}`);
// }

export const getImages = (query, page) => {
  return axios.get(`https://api.unsplash.com/search/photos`, {
    params: { query, per_page: 10, page, orientation: "landscape" },
    headers: {
      Authorization: "Client-ID 1qyT6Mp6SCyU9uLo40DOX2LK-T4C7aA0-uoabbZxss8",
    },
  });
};
