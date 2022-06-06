import axios from 'axios';

export const URL = "https://static.healthforcego.com/grades.json";

export const fetchGrades = async () => axios.get(URL).then( res => res.data.grades );
