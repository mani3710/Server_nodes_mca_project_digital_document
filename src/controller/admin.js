const { adminQuery } = require('../query');
const adminController = {
    getReviewList: async (req, res) => {
        try {
            const data = await adminQuery.getRviewList();
            res.status(200).json({ data: data, status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: "Internal server error", status: 200 });
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
            const data = await adminQuery.signIn(username, password);
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
    getProjectList: async (req, res) => {
        try {
            console.log(req.query);
            const {
                adminid
            } = req.query;
            const data = await adminQuery.getProjectList(adminid);
            res.status(200).json({ message: "success", status: 200, data: data });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    getProjectBatchList: async (req, res) => {
        try {
            console.log(req.query);
            const {
                adminid,
                projectid
            } = req.query;
            const data = await adminQuery.getProjectBatchList(adminid, projectid);
            res.status(200).json({ message: "success", status: 200, data: data });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    createBatch: async (req, res) => {
        try {
            const {
                uuid,
                title,
                adminid,
                projectid
            } = req.body;
            await adminQuery.createBatch(uuid, title, adminid, projectid);
            res.status(200).json({ message: "Created successfully", status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    assignReviewToStaff: async (req, res) => {
        try {
            const {
                batchid,
                staffid
            } = req.body;
            await adminQuery.assignStaffToReview(batchid, staffid);
            res.status(200).json({ message: "Assign review successfully", status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    assignReviewToStudent: async (req, res) => {
        try {
            const {
                batchid,
                studentid,
                guidename
            } = req.body;
            console.log(req.body);
            await adminQuery.assignStudentToReview(batchid, studentid, guidename);
            res.status(200).json({ message: "Assign review successfully", status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    createReviewProject: async (req, res) => {
        try {
            const {
                uuid,
                title,
                adminid
            } = req.body;
            console.log(req.body);
            await adminQuery.createReviewProject(uuid, title, adminid);
            res.status(200).json({ message: "Project review created successfully", status: 200 });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getProjectMember: async (req, res) => {
        try {

            const {
                batchid
            } = req.query;
            const data = await adminQuery.getProjectMembers(batchid);
            res.status(200).json({ message: "success", status: 200, data: data });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    getReviewList: async (req, res) => {
        try {
            const data = await adminQuery.getReviewList()
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    }
};
module.exports = adminController; 