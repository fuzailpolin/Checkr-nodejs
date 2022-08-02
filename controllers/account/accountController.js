const axios = require("axios").default;

const base_url = process.env.CKR_BASE_URL;

const AccountController = {
  getAccountInfo: async (req, res) => {
    try {
      console.log(process.env.CKR_API_SECRET);
      const result = await axios.get(`${base_url}/account`, {
        auth: {
          username: process.env.CKR_API_SECRET,
        },
      });
      console.log(result.data);
      res.json(result.data);
    } catch (e) {
      console.log(e.data.errors);
    }
  },

  getAccountPackages: async (req, res) => {
    try {
      console.log(process.env.CKR_API_SECRET);
      const result = await axios.get(`${base_url}/packages`, {
        auth: {
          username: process.env.CKR_API_SECRET,
        },
      });
      console.log(result.data);
      res.json(result.data);
    } catch (e) {
      console.log(e.data.errors);
    }
  },
};

module.exports = AccountController;
