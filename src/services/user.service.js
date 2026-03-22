class UserService {
  async register(req, res) {
    res.status(200).json({
      name: "HHQ",
    });
  }
}

module.exports = new UserService();
