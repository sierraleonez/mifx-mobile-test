import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://fe.dev.dxtr.asia/api',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNGZlNmQzZGEzMmJhYzFiZTllNTBlOTk5NjEwNjMwOTE4ZTUzNTc4MTU1ZmRiZTJhN2QwZWVkYzM3N2FjY2RjYjc4NzMxYTcxMTQwYTc1YmYiLCJpYXQiOjE2NjI3MjkxMDUsIm5iZiI6MTY2MjcyOTEwNSwiZXhwIjoxNjk0MjY1MTA1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.L0a_A019f8Z75QAWnJmGMG0oO1280bFcRvFAhOQ0CakRXDV6gsBEiYlPewEsX0EKZ2mPuuzVno2J533YHNYb2jAjrXgS-wILIok_f9goSvc_T_eW89QzXy_sNqC7W4L8kLR4frV7Cc6qRMjY3X_AZ5Hg9WC2FU83YALPMsuuIfhokGbTFMbTtufnHx1F8KLitJj-zH-Lhc1rDbD6TNMbqo7UmgHyjOKqQ8G1Fnladh_vu1GOthZ-F3DaSgvl7wwTPhFzIXkm4qTleJwB08spBdMeF7aqy0EDro4JeW6ObSVPVqomRNJxfEy9vWbhd7q0qAlteaJe59mSjIfjQJ_AUAhh8CS1n9qfYSMjlAZ92cMgs-sm0IzZ114RYVD0zSt-zdMqwkvmzPxk8sq37Gaq_hs31NyL67vABEVYMENTOGv9GOYl50QEzafrcuzqM26pIvsGdmmCjw8YWCo2RgYR9qIlWDyySzdO5Ot55nu2umNq05vOfOuoaEYX5qDxN2wqph5liEzKKClmhD3aAdZPIpv7QJDqPVd5ClnqpWElVpEU9mAx7ngvYMCu-UMLEa1F9GQ2nQLEYMjAaViED9N3ADgygQstCqGWwHPsy_60h7T4BDIHCUY-dO81yQtcSP2V-W5u3G4TCsXXf1UYxV7SlDKD5Z9bRlIUTSfj7Uvwcaw'
  },
})