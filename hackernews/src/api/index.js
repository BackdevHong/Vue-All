import axios from "axios";

function fetchNewsList() {
	return axios.get("https://api.hnpwa.com/v0/news/1.json");
}
