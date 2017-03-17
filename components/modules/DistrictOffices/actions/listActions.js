export const GET_LIST = 'GET_LIST';

export function getList() {
  console.log("getList");
  return {
    type: GET_LIST
  };
}

export function onFinishedRequest(response) {
  console.log("onFinishedRequest");
  return {
    type: 'FINISHED_REQUEST',
    response:response
  };
}
