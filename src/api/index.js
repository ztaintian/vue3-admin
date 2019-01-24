import axios from 'axios'
export let getDate = () =>  {
  return new Promise((resolve, reject) => {
    axios.get('http://10.17.3.17/webapisql/api/Token/GetCurrentYear').then((data) => {
      console.log(data);
      resolve(data);
    }).catch((error) => {
      reject(error);
    }) 
  }) 
}