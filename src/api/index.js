import axios from "axios";

const fetchJobs = async (page, searchQueries) => {
    console.log("fetching jobs");
    const params = new URLSearchParams();
    params.append("app_id", "edc56392");
    params.append("app_key", "66f177b30fa400815299f42508a7f047");
    params.append("max_days_old", "90");
    for (let param in searchQueries) {
        if (searchQueries[param]) {
            params.append(param, searchQueries[param]);
        }
    }
    const res = await axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/${page}`, {
        params: params,
    });
    localStorage.setItem('job_cache', JSON.stringify({ data: res?.data?.results, lastFetchTimestamp: new Date() }));
    // console.log((localStorage.getItem('job_cache')))
    
    return res;
};

export default fetchJobs;