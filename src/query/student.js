const DBService = require('../config/databaseConfig');

const studentQueries = {

    async createStudent(uuid, username, rollno, password, email) {
        const query = `insert into student values('${uuid}','${username}','${rollno}','${password}','${email}')`;
        const result = await DBService.query(query);
        // DBServiecs.end();

        console.log(result.rows);
        return result.rows;
    },
    async getStudentList() {
        const query = `select * from student`;
        const result = await DBService.query(query);
        // DBServiecs.end();

        console.log(result.rows);
        return result.rows;
    }
}
module.exports = studentQueries;