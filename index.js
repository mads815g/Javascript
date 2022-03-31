const baseUrl = "http://localhost:7360/api/TitlesBasic"

Vue.createApp({
    data() {
        return {
            Data: [],
            movieData: [],
            name: "",
            actor: null,
            movie: null,
            addActorData: { nconst: "", primaryName: "", birthYear: 0, deathYear: 0 },
            addMovieData: { tconst: "", titleType: "", primaryTitle: "", originalTitle: "", isAdult: true, startYear: 0, endYear: 0, runTimeMinutes: 0 },
            updateActorData: { nconst: "", primaryName: "", birthYear: 0, deathYear: 0 },
            updateMovieData: { tconst: "", titleType: "", primaryTitle: "", originalTitle: "", isAdult: true, startYear: 0, endYear: 0, runTimeMinutes: 0  },
            deleteActor: "",
            deleteMovie: ""
        }
    },
    methods: {
        async getAllActorData() {
            const URL = baseUrl + "/actors"
            try {
                const response = await axios.get(URL)
                this.Data = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getAllMovieData() {
            const URL = baseUrl + "/movies"
            try {
                const response = await axios.get(URL)
                this.movieData = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getActorByName(name) {
            const url = baseUrl + "/actor" + name
            try {
                const response = await axios.get(url)
                this.actor = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getMovieByName(name) {
            const url = baseUrl + "/movie" + name
            try {
                const response = await axios.get(url)
                this.movie = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteActor(name) {
            const url = baseUrl + "/actor" + name
            try {
                response = await axios.delete(url)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteMovie(name) {
            const url = baseUrl + "/movie" + name
            try {
                response = await axios.delete(url)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addActor() {
            try {
                response = await axios.post(baseUrl + "/actor", this.addActorData)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addMovie() {
            try {
                response = await axios.post(baseUrl + "/movie", this.addMovieData)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateActor() {
            const url = baseUrl + "/" + this.updateActorData.name
            try {
                response = await axios.put(url, this.updateActorData)
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateMovie() {
            const url = baseUrl + "/" + this.updateMovieData.name
            try {
                response = await axios.put(url, this.updateMovieData)
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")
