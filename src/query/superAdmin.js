const DBService = require('../config/databaseConfig');

const superAdminQueries = {
    async getReviewList() {
        const getQuery = `select * from admin`;
        const result = await DBService.query(getQuery);
        // DBServiecs.end();
        return result.rows;
    },
    async createAdmin(uuid, name, password) {
        const userCheckQuery = `select * from admin where username='${name}'`;
        const userCheckResult = await DBService.query(userCheckQuery);
        console.log("userCheckResult.rows", userCheckResult.rows)
        if (userCheckResult.rows.length) {
            console.log("in")
            return "User name already exisit";
        } else {
            const query = `insert into admin values('${uuid}','${name}','${password}')`;
            const result = await DBService.query(query);
            console.log(result.rows);
            return result.rows;
        }

    },
    async deleteAdmin(uuid) {
        const query = `DELETE FROM admin where uuid='${uuid}'`;
        console.log(query);
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async signIn(username, password) {
        const query = `select * from superadmin where username='${username}' and password='${password}'`;
        console.log(query);
        const result = await DBService.query(query);
        // DBServiecs.end();

        return result.rows;
    }

}
module.exports = superAdminQueries;