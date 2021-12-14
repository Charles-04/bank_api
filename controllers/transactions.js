<<<<<<< HEAD
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Account = require('../models/account') 
const Transaction  = require('../models/transaction');
=======
const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Account} = require('../models/account') 
const {Transaction} = require('../models/transaction');
>>>>>>> c5ad231107c7dd85e22feaa4c0b9dee8b07bbe24


const create_deposit = async (req, res) => {
    let data = req.body;
<<<<<<< HEAD
    let query = {user_id: data.user_id}
    try {
        const user_account = await Account.findOne(query).exec();
        const result = await proccessTransaction('DEPOSIT', user_account, data, query);
        res.status(200).json({ ...result });
=======
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

>>>>>>> c5ad231107c7dd85e22feaa4c0b9dee8b07bbe24

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
<<<<<<< HEAD
    let query = {user_id: data.user_id}
    try {
        const user_account = await Account.findOne(query).exec();
        const result = await proccessTransaction('WITHDRAW', user_account, data, query);
        res.status(200).json({ ...result });

    } catch (error) {
        res.status(400).json({
            success: false,
            payload: [],
            message: `Transaction unsuccessful, Pleas try again later`
        })
    }
}

const all_transactions = async (req, res) => {
    const user_id = req.params.id;
    let query = {user_id: `${user_id}`};
    console.log('id', user_id );

    try{
        const transactions = await Transaction.find({user_id: user_id}).exec();
        console.log('transaction', transactions);

        if(transactions){
            res.status(200).json({
                success: true,
                payload: transactions,
                message: `${transactions.length} transaction records retrieved`
            })
        }else{
            res.status(200).json({
                success: true,
                payload: [],
                message: `${transactions.length} transaction records retrieved`
            })

        }
    }catch(err) {
        res.status(404).json({
            sucess: false,
            payload: [],
            message: err.message
        })
    }

}

const proccessTransaction = async (type, user_account, data, query) => {
    if(type === 'DEPOSIT'){
        if(user_account && user_account.active){
            user_account.balance += data.amount;
            const result = await Account.findOneAndUpdate(query, {...user_account}, {upset: true});
            if(!result){
                return res.send(500, {error: err});
            }else{
                const transaction =  new Transaction({
                    amount: data.amount,
                    user_id: data.user_id,
                    type: 'Deposit',
                    ref_id: `GBNk-${Date.now()}` ,
                    balance: result.balance,
                    remark: data.remark
                })
    
                const new_transaction = await transaction.save();
                return {
                    success: true,
                    payload: new_transaction,
                    message: `your account ${user_account.account_number} has been credited with ${data.amount} `
                };
            }

        }else if(user_account && (!user_account.active)){
            return {
                success: true,
                payload: [],
                message: "Your Account has been blocked pls contact Bank support team"
            }
        }else{
            return {
                success: true,
                payload: [],
                message: "You dont have an account yet pls create a new account"
            }
        }
    }

    if(type === 'WITHDRAW'){
        if((user_account.balance > data.amount) && (user_account.active)){
            user_account.balance -= data.amount;
            const result = await Account.findOneAndUpdate(query, {...user_account}, {upset: true});

            if(!result){
                return res.send(500, {error: err});
            }else{
                const transaction = new Transaction({
                    amount: data.amount,
                    user_id: data.user_id,
                    type: 'Withdraw',
=======
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
>>>>>>> c5ad231107c7dd85e22feaa4c0b9dee8b07bbe24
                    ref_id: result.account_number,
                    balance: result.balance,
                    remark: data.remark
                })
<<<<<<< HEAD
    
                const new_transaction =  await transaction.save();
                return {
                    success: true,
                    payload: new_transaction,
                    message: `your account ${user_account.account_number} has been debited with ${data.amount} `
                }

            }
        }else if((user_account.balance > data.amount) && (!user_account.active)){
            return {
                success: true,
                payload: [],
                message: "Your Account has been blocked pls contact Bank support team"
            }

        }else{
            return {
                success: true,
                payload: [],
                message: "Insufficient fund"
            }
        }

    }
}

const reverse_transaction = async (req, res) => {
    const { id } = req.params;

    const transaction = await Transaction.findById(id);
    if(transaction){
        const transaction_type = transaction.type;
        // check the type and decide on which form of reverse transaction should be done.
    }
}

module.exports = {
    all_transactions,
    create_deposit,
    create_withdraw,
    reverse_transaction
}
=======

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
>>>>>>> c5ad231107c7dd85e22feaa4c0b9dee8b07bbe24
