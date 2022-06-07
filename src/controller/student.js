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
}
module.exports = studentController;