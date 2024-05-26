const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bankshem', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now, required: true },
  description: { type: String }
  });

  const Transaction = mongoose.model('transaction',TransactionSchema)

  module.exports = Transaction