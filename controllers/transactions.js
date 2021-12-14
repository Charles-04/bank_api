const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Account} = require('../models/account') 
const {Transaction} = require('../models/transaction');


const create_deposit = async (req, res) => {
    let data = req.body;
    let token = null;
    let query = {user_id: data.user_id}
    try {
        const user_account = await Account.findOne(query).exec();
        if(user_account && user_account.active){
            user_account.balance += data.amount;
            Account.findOneAndUpdate(query, user_account, {upsert: true}, (err, result) =>{
                if(err){
                    return res.send(500, {error: err});
                }
   
                const transaction = new Transaction({
                    amount: data.amount,
                    user_id: data.user_id,
                    type: 'Deposit',
                    ref_id: result.account_number,
                    balance: result.balance,
                    remark: data.remark
                })

                const new_transaction = transaction.save();
                if(new_transaction){
                    res.status(200).json({
                        success: true,
                        payload: new_transaction,
                        message:    `your account ${result.account_number} has been created with ${data.amount} `
                    })
                }
            })
        }


    } catch (error) {
        res.status(400).json({
            success: false,
            payload: [],
            message: `Transaction unsuccessful, Pleas try again later`
        })
    }
}


const create_withdraw = async (req, res) => {
    let data = req.body;
    let token = null;
    let query = {user_id: data.user_id}
    try {
        const user_account = await Account.findOne(query).exec();
        if(user_account && user_account.active){
            if(data.balance > data.amount){
                user_account.balance -= data.amount;
            }
            else{
                res.status(400).json({

                })
            }

            // withdraw if balance is greater than amount
            // else return status then json with message insufficient fund.
            
            Account.findOneAndUpdate(query, user_account, {upsert: true}, (err, result) =>{
                if(err){
                    return res.send(500, {error: err});
                }
   
                const transaction = new Transaction({
                    amount: data.amount,
                    user_id: data.user_id,
                    type: 'Deposit',
                    ref_id: result.account_number,
                    balance: result.balance,
                    remark: data.remark
                })

                const new_transaction =  transaction.save();
                if(new_transaction){
                    res.status(200).json({
                        success: true,
                        payload: new_transaction,
                        message:    `your account ${result.account_number} has been created with ${data.amount} `
                    })
                }
            })
        }


    } catch (error) {
        res.status(400).json({
            success: false,
            payload: [],
            message: `Transaction unsuccessful, Pleas try again later`
        })
    }
}
module.exports = {
    create_deposit,
    create_withdraw
}
