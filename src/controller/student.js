const { studentQuery } = require('../query');
const studentController = {
    createStudent: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                name,
                rollno,
                password,
                email
            } = req.body;
            await studentQuery.createStudent(uuid, name, rollno, password, email);
            res.status(200).json({ message: "Created successfully", status: 200 });
            res.end();
        } catch (e) {
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getStudentDataList: async (req, res) => {
        try {

            const result = await studentQuery.getStudentList();
            res.status(200).json({ message: "Success", status: 200, data: result });
            res.end();
        } catch (e) {
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    studentSignIn: async (req, res) => {
        try {
            console.log(req.body);
            const {
                rollno,
                password
            } = req.body;
            const data = await studentQuery.signStudent(rollno, password);
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
    getStudentProjectList: async (req, res) => {
        try {
            const {
                studentid
            } = req.query;
            const result = await studentQuery.getStudentProjectList(studentid);
            res.status(200).json({ message: "Success", status: 200, data: result });
            res.end();
        } catch (e) {
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getStudentProjectReviewList: async (req, res) => {
        try {
            const {
                projectid
            } = req.query;
            const result = await studentQuery.getStudentProjectReviewList(projectid);
            res.status(200).json({ message: "Success", status: 200, data: result });
            res.end();
        } catch (e) {
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getReviewMarkForStudent: async (req, res) => {
        try {
            const {
                reviewid,
                studentid
            } = req.query;
            const result = await studentQuery.getReviewMarkForStudent(reviewid, studentid);
            res.status(200).json({ message: "Success", status: 200, data: result });
            res.end();
        } catch (e) {
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    insertStudentProject: async (req, res) => {
        try {
            const {
                arrayOfProjectInfo,
                uuid,
                studentid,
                projectid,
                title,
                domain,
                abstract,
                year
            } = req.body;

            await studentQuery.insertStudentProject(arrayOfProjectInfo, uuid, studentid, projectid, title, domain, abstract, year);
            res.status(200).json({ message: "Success", status: 200 });
            res.end();
        } catch (e) {
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    }
}
module.exports = studentController;