const axios = require("axios").default;

const base_url = process.env.CKR_BASE_URL;

const candidatesController = {
  create: async (req, res) => {
    const { firstName, lastName, email } = req.body;
    try {
      const candidate = await axios.post(
        `${base_url}/candidates`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
        },
        {
          auth: {
            username: process.env.CKR_API_SECRET,
          },
        }
      );

      console.log(candidate.data);

      res.json(candidate.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const candidate = await axios.get(`${base_url}/candidates/${id}`, {
        auth: {
          username: process.env.CKR_API_SECRET,
        },
      });
      console.log(candidate.data);

      res.json(candidate.data);
    } catch (e) {
      console.log(e.response.data.error);
      res.status(500).json(e);
    }
  },

  sendInvitation: async (req, res) => {
    const { candidateId, packageId } = req.body;
    try {
      const invitation = await axios.post(
        `${base_url}/invitations`,
        {
          candidate_id: candidateId,
          package: packageId,
        },
        {
          auth: {
            username: process.env.CKR_API_SECRET,
          },
        }
      );

      console.log("Invitaion: ", invitation?.data);
      res.json(invitation.data);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },
};

module.exports = candidatesController;
