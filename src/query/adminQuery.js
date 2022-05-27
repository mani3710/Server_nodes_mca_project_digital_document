const DBService = require('../config/databaseConfig');

const adminQueries = {
    async getRviewList(projectid) {
        const getQuery = `select * from review where projectid='${projectid}'`;
        const result = await DBService.query(getQuery);
        // DBServiecs.end();
        return result.rows;
    },
    async signIn(username, password) {
        const query = `select * from admin where username='${username}' and password='${password}'`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async getProjectList(uuid) {
        const query = `select * from projectreview where adminuuid='${uuid}'`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async getProjectBatchList(adminid, projectid) {
        const query = `select * from batch where adminuuid='${adminid}' and projectreviewid='${projectid}'`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async createBatch(uuid, title, adminid, projectid) {
        const query = `insert into batch values('${uuid}','${title}','${adminid}','${projectid}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async assignStaffToReview(batchid, staffid, projectid) {
        const query = `insert into batch_staff values('${batchid}','${staffid}','${projectid}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();  
        return result.rows;
    },
    async assignStudentToReview(batchid, studentid, projectid) {
        const query = `insert into batch_student values('${batchid}','${studentid}','${projectid}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();  
        return result.rows;
    },
    async createReviewProject(
        uuid,
        title,
        adminid
    ) {
        const query = `insert into projectreview values('${uuid}','${title}','${adminid}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();       
        return result.rows;
    },
    async getProjectMembers(
        batchid
    ) {
        const staffQuery = `SELECT * FROM staff
        WHERE uuid IN (select staffid from batch_staff where batchid='${batchid}');`;

        const staffResult = await DBService.query(staffQuery);
        const studentQuery = `SELECT * FROM student
        WHERE uuid IN (select studentid from batch_student where batchid='${batchid}');`;

        const studentResult = await DBService.query(studentQuery);
        return { student: studentResult.rows, staff: staffResult.rows };
    },
    async getReviewList(projectid) {
        const query = `select * from reviewInfo where projectid='${projectid}'`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    }

}
module.exports = adminQueries;
