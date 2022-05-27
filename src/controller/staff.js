const { staffQuery } = require('../query');
const adminController = {
    createStaff: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                name,
                staffid,
                password,
                email
            } = req.body;
            await staffQuery.createStaff(uuid, name, staffid, password, email);
            res.status(200).json({ message: "Created successfully", status: 200 });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    getAllStaff: async (req, res) => {
        try {

            const data = await staffQuery.getAllStaff();
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    signIn: async (req, res) => {
        try {
            console.log(req.body);
            const {
                staffid,
                password
            } = req.body;
            const data = await staffQuery.signStaff(staffid, password);
            if (data.length) {
                res.status(200).json({ message: "Successfully signin", status: 200, data: data[0] });
            } else {
                res.status(200).json({ message: "Username/password is incorrect", status: 200 });
            }
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    getProjectListByStaff: async (req, res) => {
        try {
            console.log(req.query);
            const {
                staffid
            } = req.query;
            const data = await staffQuery.getProjectListByStaff(staffid);
            res.status(200).json({ message: "Success", status: 200, data: data });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    }

};
module.exports = adminController;  