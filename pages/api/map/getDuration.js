const getDuration = async (req, res) => {
  const mapboxUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoiYWJoaXlkdjg4IiwiYSI6ImNsZ3k2MzY2NzA2ZHUzcHBuc3dibDB5ODQifQ.bhnsHbAstwkU_9KkTtqcdA`

  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.routes[0].duration })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getDuration
