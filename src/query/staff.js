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
    },
    async getBatchStudentForStaff(staffid, projectid) {
        const query = `
        select * from student 
        where uuid in
        (select studentid from batch_student 
            where batchid in (select batchid from batch_staff 
                where projectid='${projectid}' and staffid='${staffid}'));`;
        const result = await DBService.query(query);
        // DBServiecs.end();

        const batchquery = `
        select * from batch where uuid in(select batchid from batch_staff 
        where projectid='${projectid}' and staffid='${staffid}');`;
        const batchresult = await DBService.query(batchquery);
        console.log(result.rows);
        return { students: result.rows, batchInfo: batchresult.rows[0] };
    },
    async getProjectReviewList(projectid) {
        const query = `select * from reviewinfo where projectid='${projectid}';`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getReviewTopic(reviewid) {
        const query = `select * from reviewtopic where reviewid='${reviewid}';`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    }

}
module.exports = staffQueries;