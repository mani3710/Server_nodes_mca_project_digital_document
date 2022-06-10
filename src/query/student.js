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
    },
    async signStudent(roll, password) {
        const query = `select * from student where rollno='${roll}' and password='${password}'`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getStudentProjectList(studentid) {
        const query = `select * from projectreview where uuid in(select projectid from batch_student where studentid ='${studentid}');`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getStudentProjectReviewList(projectid) {
        const query = `select * from reviewinfo where projectid='${projectid}';`;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getReviewMarkForStudent(reviewid, studentid) {
        let markQuery = ` select sum(mark)/count(mark) as mark,
        name, 
        rollno,
        topicid  from mark where    
        reviewid ='${reviewid}' 
        and 
        studentid='${studentid}' 
        group by (topicid,name,rollno);`;
        const markResult = await DBService.query(markQuery);

        let topicQuery = `select * from reviewtopic where reviewid='${reviewid}';`;
        const topicResult = await DBService.query(topicQuery);
        // let rollNumberQuery = `select rollno from mark where reviewid='${reviewid}' group by (rollno);`;
        // const topicResult = await DBService.query(topicQuery);
        return { topicArray: topicResult.rows, markArray: markResult.rows };
    },
    async insertStudentProject(arrayOfProjectInfo, uuid, studentid, projectid, title, domain, abstract, year) {
        let query1 = `INSERT INTO projectinfo values('${uuid}','${studentid}','${projectid}','${title}',${year},'${domain}','${abstract}')`;
        const result1 = await DBService.query(query1);

        let query = `INSERT INTO uploadproject(uuid,studentid,projectid,orderno,type,valuedata,option,title) VALUES`;
        for (let i = 0; i < arrayOfProjectInfo.length; i++) {
            if (i != arrayOfProjectInfo.length - 1) {
                query +=
                    `(
                '${arrayOfProjectInfo[i].uuid}',
                '${arrayOfProjectInfo[i].studentid}',
                '${arrayOfProjectInfo[i].projectid}',
                ${arrayOfProjectInfo[i].orderno}, 
                '${arrayOfProjectInfo[i].type}',
                '${arrayOfProjectInfo[i].valuedata}',
                '${arrayOfProjectInfo[i].option}',
                '${arrayOfProjectInfo[i].title}'
                ),`
            } else {
                query +=
                    `(
                    '${arrayOfProjectInfo[i].uuid}',
                    '${arrayOfProjectInfo[i].studentid}',
                    '${arrayOfProjectInfo[i].projectid}',
                    ${arrayOfProjectInfo[i].orderno},
                    '${arrayOfProjectInfo[i].type}',
                    '${arrayOfProjectInfo[i].valuedata}',
                    '${arrayOfProjectInfo[i].option}',
                    '${arrayOfProjectInfo[i].title}'
                );`
            }
        }

        const result = await DBService.query(query);

        return { result: "" };
    }
}
module.exports = studentQueries;