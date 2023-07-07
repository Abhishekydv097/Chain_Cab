const getLocationCoordinates = async (req, res) => {
  console.log("req.body.location:", req.body.location);
  const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.location}.json?access_token=pk.eyJ1IjoiYWJoaXlkdjg4IiwiYSI6ImNsZ3k2MzY2NzA2ZHUzcHBuc3dibDB5ODQifQ.bhnsHbAstwkU_9KkTtqcdA`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json();
    res.status(200).send({ message: 'success', data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getLocationCoordinates
