import { BASE_URL } from './Config';
import { checkingAuth } from './LocalStorage';

const USER_TYPE: string = 'client';

function HttpGet(endpoint: string): Promise<any> {
  return requestData(endpoint);
}

function HttpPost(endpoint: string, params: any): Promise<any> {
  return requestData(endpoint, params, 'POST');
}

function HttpPut(endpoint: string, params: any): Promise<any> {
  return requestData(endpoint, params, 'PUT');
}

function deletemethod(endpoint: string, params: any): Promise<any> {
  return requestData(endpoint, params, "DELETE");
}

async function requestData(url: string, data: any = {}, method: string = 'GET'): Promise<any> {
  let xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.open(method, BASE_URL + url);
  if (checkingAuth()) xhr.setRequestHeader('authorization', checkingAuth());
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Access-Control-Allow-Origin', BASE_URL);
  xhr.setRequestHeader('usertype', USER_TYPE);

  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      xhr.send();
    } else {
      xhr.send(JSON.stringify(data));
    }
    xhr.onload = () => {
      let response = JSON.parse(xhr.response);

      if (xhr.status === 200 || xhr.status === 400 || xhr.status === 404) {
        resolve(response);
      } else {
        reject(response);
      }
    };
  });
}

// async function fileUpload(url: string, file: any, callback: () => void): Promise<any> {
//   var xhr: XMLHttpRequest = new XMLHttpRequest();
//   xhr.upload.onprogress = function (event) {
//     let percent: number = (event.loaded * 100) / event.total;
//     callback(percent);
//   };

//   xhr.onloadend = function () {
//     if (xhr.status == 200) {
//       console.log('Success');
//     } else {
//       console.log('error');
//     }
//   };

//   xhr.open('post', BASE_URL + url);
//   if (checkingAuth()) xhr.setRequestHeader('Authorization', checkingAuth());
//   xhr.setRequestHeader('Access-Control-Allow-Origin', ALLOW_ORIGIN);
//   xhr.setRequestHeader('userType', USER_TYPE);
//   return new Promise((resolve, reject) => {
//     xhr.send(file);
//     xhr.onload = () => {
//       let response = JSON.parse(xhr.response);
//       console.log(response);
//       resolve(response);
//     };
//   });
// }



export {
  requestData,
  HttpGet,
  HttpPost,
  HttpPut,
  deletemethod
};