import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  classLevel: {
    type: String,
    required: true,
    enum: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 
          'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10']
  },
  className: {
    type: String,
    required: true,
    unique: true
  },
  stream: {
    type: String,
    required: true,
    enum: ['General', 'Arts', 'Science', 'Computer'],
    default: 'General'
  },
  students: [{
    type: String,
    required: true,
    validate: {
      validator: (v: string) => /^\d{9}$/.test(v),
      message: 'Invalid roll number format'
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});