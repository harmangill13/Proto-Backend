const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id_: {type: Number},
    Username: String,
    password: String,
    name: String,
    email: String,
    phonenumber: Number,
    loanOfficer: Boolean,
    loanPending: Boolean,
    creditScore: Number,
    checkingAccount: { type: String, required: true, unique: true }
  });

  const Bankshem = mongoose.model('bankUser',UserSchema)

  module.exports = Bankshem