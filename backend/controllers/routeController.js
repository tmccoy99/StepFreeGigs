const routeController = {
  Index: (req, res) => {
    res.status(400)
    res.send('return the events near the user')
  }
}

module.exports = routeController;