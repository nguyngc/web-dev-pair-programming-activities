const express = require("express");
const app =express();

const {
    getAllFeedbacks,
    createFeedback,
    getFeedbackById,
    updateFeedBack,
    deleteFeedback,
} = require("./feedbackHandlers")

// Middlewareto parse JSON
app.use(express.json());

// ROUTES

// GET /feedback
app.get("/feedback", getAllFeedbacks);

// POST /feedback
app.post("/feedback", createFeedback);

// GET /feedback/:feedbackId
app.get("/feedback/:feedbackId", getFeedbackById);

// PUT /feedback/:feedbackId
app.put("/feedback/:feedbackId", updateFeedBack);

// DELETE /feedback/:feedbackId
app.delete("/feedback/:feedbackId", deleteFeedback);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});