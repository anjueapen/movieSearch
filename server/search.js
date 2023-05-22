const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
const userList = [{ name: "test", id: 101 }];
const movieList = require("./movies.json");
console.log(movieList.length);
app.get("/api/movies", (req, res) => {
    console.log(req?.query);
    const { movieName } = req.query;
    let filteredMovies = movieList.filter(movie => movie?.title.toLowerCase().includes(movieName?.toLowerCase()))
    res.json({ results: filteredMovies })
})
const PORT = 3006;
app.listen(PORT, () => console.log(`server started at ${PORT}`)) 