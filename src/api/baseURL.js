function getQueryStringParameterByName(name, url){
  if(!url) url = window.location.href;
  /* eslint-disable no-useless-escape */
  name = name.replace(/[\[\]]/g,"\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g,""));

}
//localhost:3000/?useMockApi=true girildiginde mock api, aksi halde prod datasi
export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}


