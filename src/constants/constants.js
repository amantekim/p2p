export const getUrl = () => {
  let url = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`
  return url
}