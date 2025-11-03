/* // The data model for feedback is as follows
{
  "sender": "John Smith",
  "message": "Great session on React components! I found the examples very helpful.",
  "rating": 5
}
 */
let feedbackArray = [];

let nextId = 1;

const getAll = () => feedbackArray;

const addOne = (sender, message, rating) => {
  // Check if any parameter is empty or undefined
  if (!sender || !message || !rating) {
    return false;
  }

  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
};

const findById = (id) => {
  const feedback = feedbackArray.find((item) => item.id == id);
  if (feedback) {
    return feedback;
  } else {
    return false;
  }
};

const updateOneById = (id, updatedData) => {
  const feedback = findById(id);
  if (feedback) {
    // Update properties only if provided in updatedData
    if (updatedData.sender) {
      feedback.sender = updatedData.sender;
    }
    if (updatedData.message) {
      feedback.message = updatedData.message;
    }
    if (updatedData.rating) {
      feedback.rating = updatedData.rating;
    }
    return feedback;
  }
  return false;
}

const deleteOneById = (id) => {
  const feedback = findById(id);
  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter((feedback) => feedback.id != id);
    return feedbackArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
};

if (require.main === module) {
  let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
  console.log(result);
  let result2 = addOne("John Smith 2", "Great session on React components! I found the examples very helpful.", 4);
  console.log(result2);
  
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
  // rest of the tests here
  console.log("updateOne called:", updateOneById(1, { sender: "David", message: "Good job!" }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

Feedback = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Feedback;