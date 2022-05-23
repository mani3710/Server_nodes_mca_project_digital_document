const DBService = require('../config/databaseConfig');

const marksQueries = {
    async createReviewOneMark(
        uuid,
        staffid,
        studentid,
        reviewid,
        clearityInConceptMark,
        literatureSureyMark,
        detailedDesignMark,
        implementationMark,
        presentationAndReportMark,
        batchid,
        description,
        name,
        rollno,
        staffName
    ) {
        const query = `insert into review_one values('${uuid}','${staffid}','${studentid}','${reviewid}',${clearityInConceptMark},${literatureSureyMark},${detailedDesignMark},${implementationMark},${presentationAndReportMark},'${batchid}','${description}','${name}','${rollno}','${staffName}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async createReviewTwoMark(
        uuid,
        staffid,
        studentid,
        reviewid,
        detailesDesignMark,
        implementationMark,
        performanceAndResultMark,
        presentationAndReportMark,
        batchid,
        description
    ) {
        const query = `insert into review_two values('${uuid}','${staffid}','${studentid}','${reviewid}',${detailesDesignMark},${implementationMark},${performanceAndResultMark},${presentationAndReportMark},'${batchid}','${description}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async createReviewThreeMark(
        uuid,
        staffid,
        studentid,
        reviewid,
        implementationMark,
        performanceAndResultMark,
        reportMark,
        batchid,
        description
    ) {
        const query = `insert into review_three values('${uuid}','${staffid}','${studentid}','${reviewid}',${implementationMark},${performanceAndResultMark},${reportMark},'${batchid}','${description}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async createFinalReviewMark(
        uuid,
        studentid,
        reviewid,
        internalMark,
        externalMark,
        guideMark,
        batchid
    ) {
        const query = `insert into final_review values('${uuid}','${studentid}','${reviewid}',${internalMark},${externalMark},${guideMark},'${batchid}')`;
        console.log(query)
        const result = await DBService.query(query);
        // DBServiecs.end();
        return result.rows;
    },
    async getFinalMark(
        studentid,
        batchid
    ) {

        const reviewOneMarkQuery = `select 
        avg(clearityinconceptmark) as clearityinconceptmark, 
        avg(literaturesureymark) as literaturesureymark,
        avg(detaileddesignmark) as detaileddesignmark, 
        avg(implementationmark) as implementationmark,
        avg(presentationandreportmark) as presentationandreportmark
        from review_one where studentid='${studentid}' and batchid='${batchid}'`;
        // const reviewOneMarkQuery = `select * from review_one  where studentid='${studentid}' and batchid='${batchid}'`;
        // const reviewTwoMarkQuery = `select 
        // avg(detailesdesignmark) as detailesdesignmark,,
        // avg(implementationmark) as implementationmark,
        // avg(performanceandresultmark) as performanceandresultmark,
        // avg(presentationandreportmark) as presentationandreportmark 
        // from review_two where studentid='${studentid}' and batchid='${batchid}'`;
        const reviewTwoMarkQuery = `select 
        avg(detailesdesignmark) as detailesdesignmark,  
        avg(implementationmark) as implementationmark,
        avg(performanceandresultmark) as performanceandresultmark,
        avg(presentationandreportmark) as presentationandreportmark 
        from review_two  where studentid='${studentid}' and batchid='${batchid}'`;
        const reviewThreeMarkQuery = `select  
        avg(implementationmark) as implementationmark,
        avg(performanceandresultmark) as performanceandresultmark,
        avg(reportmark) as reportmark 
        from review_three where studentid='${studentid}' and batchid='${batchid}'`;
        //const reviewThreeMarkQuery = `select * from review_three  where studentid='${studentid}' and batchid='${batchid}'`;
        const reviewFinalQuery = `select * from final_review where studentid='${studentid}' and batchid='${batchid}'`;
        const resultReviewOne = await DBService.query(reviewOneMarkQuery);
        const resultReviewTwo = await DBService.query(reviewTwoMarkQuery);
        const resultReviewThree = await DBService.query(reviewThreeMarkQuery);
        const resultFinalReviewMark = await DBService.query(reviewFinalQuery);

        const result = {
            resultReviewOne: resultReviewOne.rows[0],
            resultReviewTwo: resultReviewTwo.rows[0],
            resultReviewThree: resultReviewThree.rows[0],
            resultFinalReviewMark: resultFinalReviewMark.rows[0]
        }
        return result;
        // return { resultReviewOne, resultReviewTwo, resultReviewThree };
    },
    async getReviewOneMarksForFirstReview(batchid) {
        const query = `select 
        avg(clearityinconceptmark) as clearityinconceptmark, 
        avg(literaturesureymark) as literaturesureymark,
        avg(detaileddesignmark) as detaileddesignmark, 
        avg(implementationmark) as implementationmark,
        avg(presentationandreportmark) as presentationandreportmark,
        name,
        rollno
        from review_one where batchid='${batchid}' GROUP BY (studentid,name,rollno); `;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getReviewTwoMarksForFirstReview(batchid) {
        const query = `select 
        avg(detailesdesignmark) as detailesdesignmark,  
        avg(implementationmark) as implementationmark,
        avg(performanceandresultmark) as performanceandresultmark,
        avg(presentationandreportmark) as presentationandreportmark,
        name,
        rollno
        from review_two  where batchid='${batchid}' GROUP BY (studentid,name,rollno); `;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getReviewThreeMarksForFirstReview(batchid) {
        const query = `select  
        avg(implementationmark) as implementationmark,
        avg(performanceandresultmark) as performanceandresultmark,
        avg(reportmark) as reportmark,
        name,
        rollno
        from review_three where batchid='${batchid}' GROUP BY (studentid,name,rollno); `;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    },
    async getFinalReview(batchid) {
        const query = `select  avg(internalmark) as internal,
        avg(externalmark) as external,
        avg(guidemark) as guidemark,   name,
        rollno from final_review where batchid='${batchid}' GROUP BY (studentid,name,rollno); `;
        const result = await DBService.query(query);
        // DBServiecs.end();
        console.log(result.rows);
        return result.rows;
    }
}
module.exports = marksQueries 