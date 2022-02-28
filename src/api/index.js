import axios from 'axios'

(async () => {
  const res = await axios.get('https://axios-http.com/docs/example')
  console.log(res)
})()