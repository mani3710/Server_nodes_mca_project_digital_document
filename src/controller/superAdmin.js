const { superAdminQuery } = require('../query');
const adminController = {
    getAdminList: async (req, res) => {
        try {
            const data = await superAdminQuery.getReviewList();
            res.status(200).json({ data: data, status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 200 });
            res.end();
        }
    },
    createAdmin: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                name,
                password
            } = req.body;
            const result = await superAdminQuery.createAdmin(uuid, name, password);
            console.log(result);
            if (result != "User name already exisit") {
                res.status(200).json({ message: "Created successfully", status: 200 });
            } else {
                res.status(200).json({ message: "User name already found", status: 200 });
            }
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 200 });
            res.end();
        }
    },
    deleteAdmin: async (req, res) => {
        try {
            console.log("deleted", req.body);
            const {
                uuid
            } = req.body;
            await superAdminQuery.deleteAdmin(uuid);
            res.status(200).json({ message: "Deleted successfully", status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    signIn: async (req, res) => {
        try {
            console.log(req.body);
            const {
                username,
                password
            } = req.body;
            const data = await superAdminQuery.signIn(username, password);
            console.log(data);
            if (data.length) {
                res.status(200).json({ message: "Successfully signin", status: 200, data: data[0] });
            } else {
                res.status(200).json({ message: "Username/password is incorrect", status: 200 });
            }

            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    }
};
module.exports = adminController;   