const store = window.localStorage;

export function setItem(key, enquiry) {
  store.setItem(key, JSON.stringify(enquiry));
}

export function getItem(key) {
  return store.getItem(key);
}

export function getAll() {
  return store;
}

export function getData() {
  return JSON.parse(store.data);
}

export function getEnquiry(id) {
  return JSON.parse(store.data[id])
}

export function getEnquiryType() {
  return JSON.parse(store.enquiryType);
}

export function addComments(id, comment, setEnquiryList) {
  const data = getData()
  const item = data.find(x => x.enquiryNum === id)
  const index = data.findIndex(x => x.enquiryNum === id)
  const commentList = item.comments
  commentList.push(comment)
  if(~index)
  {
    data[index] = item;
  }
  store.setItem("data", JSON.stringify(data))
  setEnquiryList(getData);
}

export function removeItem(key, enquiryList, setEnquiryList) {
  enquiryList.splice(key, 1);
  store.setItem("data", JSON.stringify(enquiryList));
  setEnquiryList(getData);
}

export function addItem(data, setEnquiryList) {
  let oldStore = getData();
  oldStore.push(data);
  store.setItem("data", JSON.stringify(oldStore));
  setEnquiryList(getData);
}

export function storeClear() {
  store.clear();
}

export function storeLength() {
  return store.length;
}
