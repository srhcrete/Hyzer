module.exports = {
  all(req, res) {
    res.status(200).json([
      {
        name: 'game 1',
      },
      {
        name: 'game 2'
      },
      {
        name: 'YOU DAAAADDDDDD'
      },
      {
        name: 'BOONDOGLE'
      }
    ]);
  }
};
