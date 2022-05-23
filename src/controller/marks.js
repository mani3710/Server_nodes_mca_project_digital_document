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
                description
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
}
module.exports = marksController;