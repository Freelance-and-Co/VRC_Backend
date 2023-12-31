const express = require('express')
const Constants = require('../utils/Constants/response_messages');
const ReceiptServices = require('../services/receipts_service');
const JwtHelper = require('../utils/Helpers/jwt_helper')
const jwtHelperObj = new JwtHelper();
const router = express.Router()

router.post('/createReceipt', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.createReceipt(req.body)
            .catch(err => {
                console.log("error", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })
    }
    catch (err) {
        next(err);
    }
})

router.post('/validateReceipt', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.validateReceipt(req.body)
            .catch(err => {
                console.log("errors:", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })

    } catch (err) {
        next(err);
    }
})

router.post('/rejectReceipt', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.rejectReceipt(req.body)
            .catch(err => {
                console.log("errors:", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })

    } catch (err) {
        next(err);
    }
})

router.get('/getReceipts', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.getReceipts()
            .catch(err => {
                console.log("errors:", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })

    } catch (err) {
        next(err);
    }
})

router.get('/getApprovedReceiptsList', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.getApprovedReceiptsList()
            .catch(err => {
                console.log("errors:", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })

    } catch (err) {
        next(err);
    }
})
router.get('/getRejectedReceiptsList', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.getRejectedReceiptsList()
            .catch(err => {
                console.log("errors:", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })

    } catch (err) {
        next(err);
    }
})

router.get('/getAvailableReceiptProjectNames', jwtHelperObj.verifyAccessToken, async (req, res, next) => {
    try {
        const reciptsServiceObj = new ReceiptServices();
        const data = await reciptsServiceObj.getAvailableReceiptProjectNames()
            .catch(err => {
                console.log("errors:", err.message);
                throw err;
            })

        res.send({
            "status": 201,
            "message": Constants.SUCCESS,
            "data": data
        })

    } catch (err) {
        next(err);
    }
})

module.exports = router;