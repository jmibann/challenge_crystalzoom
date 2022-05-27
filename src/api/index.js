import axios from 'axios';

const URL = "https://static.healthforcego.com/grades.json"



export const fetchGrades = axios.get(URL).then( res => res.data.grades);