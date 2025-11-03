// Mock implementations for API functions:
const Feedback = require("./feedbackLib");

// Get all feedbacks
const getAllFeedbacks = (req, res) => {
  const feedback = Feedback.getAll();
  res.json(feedback);
};

// Create feedback
const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body;
  const newFeedback = Feedback.addOne(sender, message, rating);
  
  if (newFeedback) {
    res.json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

// Get Feedback by Id
const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = Feedback.findById(feedbackId);
  if(feedback){
    res.json(feedback);
  }else{
    res.status(404).json({message:'Not found'})
  };
};

// Update Feedback By Id
const updateFeedBack = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const { sender, message, rating } = req.body;

  const updatedFeedback = Feedback.updateOneById(feedbackId, {
    sender,
    message,
    rating,
  });

  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

// Delete Feedback By Id
const deleteFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const isDeleted = Feedback.deleteOneById(feedbackId);

  if (isDeleted) {
    res.json({ message: "Feedback deleted successfully" });
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedBack,
  deleteFeedback,
};
