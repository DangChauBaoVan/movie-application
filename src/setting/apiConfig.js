const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey:"78bf6724bbb701012c072a5bf8e833fc",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig