export function checkUrlSearchParam(param, searchName) {
  return new URLSearchParams(param).get(searchName);
}
