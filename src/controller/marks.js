const { marksQuery } = require('../query');
const marksController = {
    createReviewOneMark: async (req, res) => {
        try {
            console.log(req.body);
            const {
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
            } = req.body;
            const data = await marksQuery.createReviewOneMark(
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
            );

            res.status(200).json({ message: "Successfully inserted", status: 200, data: data[0] });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    createReviewTwoMark: async (req, res) => {
        try {
            console.log(req.body);
            const {
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
            } = req.body;
            const data = await marksQuery.createReviewTwoMark(
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
            );

            res.status(200).json({ message: "Successfully inserted", status: 200, data: data[0] });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    createReviewThreeMark: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                staffid,
                studentid,
                reviewid,
                implementationMark,
                performanceAndResultMark,
                reportMark,
                batchid,
                description
            } = req.body;
            const data = await marksQuery.createReviewThreeMark(
                uuid,
                staffid,
                studentid,
                reviewid,
                implementationMark,
                performanceAndResultMark,
                reportMark,
                batchid,
                description
            );

            res.status(200).json({ message: "Successfully inserted", status: 200, data: data[0] });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    createFinalReviewMark: async (req, res) => {
        try {
            console.log(req.body);
            const {
                uuid,
                studentid,
                reviewid,
                internalMark,
                externalMark,
                guideMark,
                batchid
            } = req.body;
            const data = await marksQuery.createFinalReviewMark(
                uuid,
                studentid,
                reviewid,
                internalMark,
                externalMark,
                guideMark,
                batchid
            );

            res.status(200).json({ message: "Successfully inserted", status: 200, data: data[0] });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getFinalMark: async (req, res) => {
        try {
            console.log(req.query);
            const {
                studentid,
                batchid
            } = req.query;
            const data = await marksQuery.getFinalMark(
                studentid,
                batchid
            );
            let totalMark = 0.0;
            let finalMark = 0.0;
            console.log(data);

            totalMark = 0.0
                + parseFloat(data.resultReviewOne.clearityinconceptmark)
                + parseFloat(data.resultReviewOne.literaturesureymark)
                + parseFloat(data.resultReviewOne.detaileddesignmark)
                + parseFloat(data.resultReviewOne.implementationmark)
                + parseFloat(data.resultReviewOne.presentationandreportmark)
                + parseFloat(data.resultReviewTwo.detailesdesignmark)
                + parseFloat(data.resultReviewTwo.implementationmark)
                + parseFloat(data.resultReviewTwo.performanceandresultmark)
                + parseFloat(data.resultReviewTwo.presentationandreportmark)
                + parseFloat(data.resultReviewThree.implementationmark)
                + parseFloat(data.resultReviewThree.performanceandresultmark)
                + parseFloat(data.resultReviewThree.reportmark)
                ;
            console.log("totalMark", totalMark);
            finalMark = parseFloat(data.resultFinalReviewMark.internalmark)
                + parseFloat(data.resultFinalReviewMark.externalmark)
                + parseFloat(data.resultFinalReviewMark.guidemark)

            totalMark = Math.round((totalMark / 200) * 60);
            finalMark = Math.round((finalMark / 50) * 40);
            data.finalMark = {
                internalMark: totalMark,
                externalMark: finalMark,
                totalMark: totalMark + finalMark
            }

            res.status(200).json({ message: "Success", status: 200, data: data });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e.detail, status: 500 });
            res.end();
        }
    },
    getFirstReviewMarkForBatch: async (req, res) => {
        try {
            console.log(req.query);
            const {
                batchid
            } = req.query;
            const data = await marksQuery.getReviewOneMarksForFirstReview(batchid);
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    getReviewTwoMarkForBatch: async (req, res) => {
        try {
            console.log(req.query);
            const {
                batchid
            } = req.query;
            const data = await marksQuery.getReviewTwoMarksForFirstReview(batchid);
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    getReviewThreeMarkForBatch: async (req, res) => {
        try {
            console.log(req.query);
            const {
                batchid
            } = req.query;
            const data = await marksQuery.getReviewThreeMarksForFirstReview(batchid);
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    getFinalReviewMarkForBatch: async (req, res) => {
        try {
            console.log(req.query);
            const {
                batchid
            } = req.query;
            const data = await marksQuery.getFinalReview(batchid);
            res.status(200).json({ message: "Success", status: 200, data: data });
            res.end();
        } catch (e) {

            res.status(500).json({ error: e.detail, status: 300 });
            res.end();
        }
    },
    createReviewList: async (req, res) => {
        try {
            console.log(req.body);
            const {
                reviewList
            } = req.body;
            await marksQuery.createReviewList(reviewList);
            res.status(200).json({ message: "created", status: 200 });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    createReviewTopicList: async (req, res) => {
        try {
            console.log(req.body);
            const {
                reviewTopicList
            } = req.body;
            await marksQuery.createReviewTopicList(reviewTopicList);
            res.status(200).json({ message: "created", status: 200 });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    createReviewMarks: async (req, res) => {
        try {
            console.log(req.body);
            const {
                reviewMarkList
            } = req.body;
            await marksQuery.insertMarks(reviewMarkList);
            res.status(200).json({ message: "created", status: 200 });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    },
    getReviewMark: async (req, res) => {
        try {
            console.log(req.query);
            const {
                reviewid
            } = req.query;
            const result = await marksQuery.getReviewMark(reviewid);
            // console.log("result", result); n
            let distintingName = {};
            for (let i = 0; i < result.markArray.length; i++) {
                if (distintingName.hasOwnProperty(result.markArray[i].rollno)) {
                    distintingName[result.markArray[i].rollno].push(result.markArray[i]);
                } else {
                    distintingName[result.markArray[i].rollno] = [
                        {
                            ...result.markArray[i]
                        }
                    ]
                }
            }
            // console.log("result", distintingName);
            let newArrayMarkValue = [];
            Object.keys(distintingName).forEach(function (key) {
                let markPerPerson = distintingName[key];
                let newObj = { name: markPerPerson[0].name, rollno: markPerPerson[0].rollno };
                for (let mark of markPerPerson) {
                    newObj[mark.topicid] = mark.mark;
                }
                newArrayMarkValue.push(newObj);
            });

            // for (let markPerPerson of distintingName) {
            //     let newObj = { name: markPerPerson[0].name, rollno: markPerPerson[0].rollno };
            //     for (let mark of markPerPerson) {
            //         newObj[mark.topicid] = mark.mark;

            //     }
            //     newArrayValue.push(newObj);
            // }


            // for(let i =0;i<result.topicArray.length;i++){
            //     for(let j =0;j<result.markArray.length;j++){
            //      if(result.markArray[j].topicid == result.topicArray[i].uuid){

            //      }
            //     }
            // }
            res.status(200).json({ message: "created", status: 200, data: { marks: newArrayMarkValue, topic: result.topicArray } });

            res.end();
        } catch (e) {
            console.log("error", e);
            res.status(500).json({ error: e, status: 500 });
            res.end();
        }
    }
}
module.exports = marksController;