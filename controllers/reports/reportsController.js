const axios = require("axios").default;

const base_url = process.env.CKR_BASE_URL;

const reportsController = {
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const report = await axios.get(`${base_url}/reports/${id}`, {
        auth: {
          username: process.env.CKR_API_SECRET,
        },
      });
      console.log(report.data);
      res.json(report.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },

  getNationalCiriminalSearchReport: async (req, res) => {
    const { id } = req.params;
    try {
      const report = await axios.get(
        `${base_url}/national_criminal_searches/${id}`,
        {
          auth: {
            username: process.env.CKR_API_SECRET,
          },
        }
      );
      console.log(report.data);
      res.json(report.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },

  getSSNTraceReport: async (req, res) => {
    const { id } = req.params;
    try {
      const report = await axios.get(`${base_url}/ssn_traces/${id}`, {
        auth: {
          username: process.env.CKR_API_SECRET,
        },
      });
      console.log(report.data);
      res.json(report.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },

  getSexOffenderSearchReport: async (req, res) => {
    const { id } = req.params;
    try {
      const report = await axios.get(
        `${base_url}/sex_offender_searches/${id}`,
        {
          auth: {
            username: process.env.CKR_API_SECRET,
          },
        }
      );

      console.log(report?.data);
      res.json(report.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },

  getGlobalWatchlistReport: async (req, res) => {
    const { id } = req.params;
    try {
      const report = await axios.get(
        `${base_url}/global_watchlist_searches/${id}`,
        {
          auth: {
            username: process.env.CKR_API_SECRET,
          },
        }
      );
      console.log(report.data);
      res.json(report.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },
};

module.exports = reportsController;
