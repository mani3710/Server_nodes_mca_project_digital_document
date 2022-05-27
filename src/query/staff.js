const DBService = require('../config/databaseConfig');

const staffQueries = {

    async createStaff(uuid, username, staffid, password, email) {
        const query = `insert into staff values('${uuid}','${username}','${staffid}','${password}','${email}')`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getAllStaff() {
        const query = `select * from staff`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async signStaff(staffid, password) {
        const query = `select * from staff where staffid='${staffid}' and password='${password}'`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getProjectListByStaff(staffid) {
        const query = `select * from projectreview where uuid in (select projectid from batch_staff where staffid='${staffid}');`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    }
}
module.exports = staffQueries;