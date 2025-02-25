console.log(`==================== index.js file ====================`);
//=============================== The provided course information ===============================//
const CourseInfo = {
  courseId: 451,
  name: "Introduction to JavaScript",
};
//================================================================================================//

//================================ The provided assignment group =================================//
const AssignmentGroup = {
  assignmentId: 12345,
  asignmentName: "Fundamentals of JavaScript",
  assignmentCourse_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};
//================================================================================================//

//============================= The provided learner submission data =============================//
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];
//================================================================================================//

//======================= The getLearnerData function to process the data ========================//
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  //============== DESTRUCTURING THE courseInfo AND assignmentGroup ARRAY OF OBJECTS =============//
  const { courseId, name } = courseInfo;
  const { assignmentId, asignmentName, assignmentCourse_id, group_weight, assignments } =
    assignmentGroup;
  //==============================================================================================//

  try {
    // Checking if the course ID is not a number
    if (isNaN(courseId)) throw `The course ID is not a number`;
    // Checking if the assignmentId is not a number
    if (isNaN(assignmentId)) throw `The assignmentId is not a number`;
    // Checking if the assignmentGroup's assignmentCourse_id is not a number
    if (isNaN(assignmentCourse_id)) throw `The assignmentCourse_id is not a number`;

    // Checking if the courseInfo's courseID matches the assignmentGroup's assignmentCourse_id
    if (courseId !== assignmentCourse_id) {
      throw `The assignments course ID "${courseInfo.id}" does not match the Courses ID of "${assignmentGroup.course_id}"`;
    }
    // Checking if the points_possible in the assignments[] array does not = 0
    for (let i = 0; i < assignments.length; i++) {
      // Caching the array of assigments id
      let assignmentId = assignments[i].id;
      // Checking if the array of assignments ID is not a number
      if (isNaN(assignmentId)) throw `The assignments ID's must be a number`;
      // Caching the array of points_possible
      let pointsPossible = assignments[i].points_possible;
      // Checking if the array of points_possible is not a number
      if (isNaN(pointsPossible)) throw `The points possible must be a number`;
      if (pointsPossible < 1)
        throw `The points possible submitted is ${pointsPossible}, The points possible must be larger than 0`;
    }

    // Loop through the learnerSubmissions array of objects data
    for (let i = 0; i < learnerSubmissions.length; i++) {
      let learnersId = learnerSubmissions[i].learner_id;
      let assignmentsId = learnerSubmissions[i].assignment_id;
      let submissionDate = learnerSubmissions[i].submission.submitted_at;
      let submissionScore = learnerSubmissions[i].submission.score;

      // console.log(submissionDate);

      // Checking if the LearnerSubmissions learner_id is not a number
      if (isNaN(learnersId)) throw `The learner_id is not a number`;
      // Checking if the LearnerSubmissions assignment_id is not a number
      if (isNaN(assignmentsId))
        throw `The LearnerSubmissions assignment_id is not a number`;
      // Checking if the LearnerSubmissions submited score is not a number
      if (isNaN(submissionScore))
        throw `The LearnerSubmissions submited score is not a number`;
    }
  } catch (error) {
    alert(error);
  }
  //=====================================================================================================//

  //=================================== Performing the data processing ==================================//
  // filtering out each duplicate learnersSubmissions using the learner_id
  // So I can isolate each individual learnersSubmission's ID
  const filteredId = learnerSubmissions.filter((learnerSubmission, index, self) => {
    return (
      index ===
      self.findIndex(
        (learnersId) => learnersId.learner_id === learnerSubmission.learner_id
      )
    );
  });
  const learnerTestId1 = filteredId[0].learner_id;
  const learnerTestId2 = filteredId[1].learner_id;
  //=====================================================================================================//

  //========================================== TO BE CONTINUED ==========================================//
  // Create loop to programmatically assign the learners ID to a variable
  // let learnerOne;
  // let learnerTwo;
  // console.log(learnerTwo);
  // for (let i = 0; i < filteredId.length; i++) {
  //   console.log(filteredId[i].learner_id);
  //   // if (condition) {
  //   // } else {
  //   // }
  // }
  //=====================================================================================================//

  //=====================================================================================================//
  // Filtering through and retrieving all the data for the learner using the specific "learner_id"
  const learner1 = learnerSubmissions.filter(
    (learnerSubmission) => learnerTestId1 === learnerSubmission.learner_id
  );
  //=====================================================================================================//

  //=====================================================================================================//
  // Filtering through and retrieving all the data for the learner using the specific "learner_id"
  const learner2 = learnerSubmissions.filter(
    (learnerSubmission) => learnerTestId2 === learnerSubmission.learner_id
  );
  //=====================================================================================================//

  //=====================================================================================================//
  // CACHE THE DATE TO TEST IF THE ASSIGMENT IS DUE
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  const todaysDateIs = `${year}-${month}-${day}`;
  //=====================================================================================================//

  //=====================================================================================================//
  // THIS FILTERS AND RETURNS THE ASSIGNMENTS DUE BASED ON THE DATE
  const newAssignmentGroup = assignments.filter(
    (assignment) => assignment.due_at <= todaysDateIs
  );
  //=====================================================================================================//

  //=====================================================================================================//
  // The points possible is added together to be used to get the average
  let pointsPossibleTotal = 0;
  for (let i = 0; i < newAssignmentGroup.length; i++) {
    const pointsPossible = newAssignmentGroup[i].points_possible;
    pointsPossibleTotal += pointsPossible;
  }
  //=====================================================================================================//

  //=====================================================================================================//
  // Initialize the results array
  const results = [];
  const testResults1 = {};
  const testResults2 = {};
  let totalScore1 = 0;
  let totalScore2 = 0;
  let totalScores2 = 0;
  let avg1 = 0;
  let avg2 = 0;
  let assignmentId1;
  let assignmentId2;
  let assignmentPointsPossible1;
  let assignmentPointsPossible2;
  let assignmentsPointsPossible2 = 0;
  //=====================================================================================================//

  //=====================================================================================================//
  // learner2's for loop
  // This for loop calculates the total average
  // And programmatically use the assignments ID's as the key and the average per test as the value
  for (let i = 0; i < learner2.length; i++) {
    const learner2Score = learner2[i].submission.score;
    const learner2SubmissionDate = learner2[i].submission.submitted_at;
    const dueDate = assignments[i].due_at;

    if (todaysDateIs > dueDate) {
      assignmentId2 = assignments[i].id;

      assignmentPointsPossible2 = assignments[i].points_possible;
      if (dueDate > learner2SubmissionDate) {
        totalScore2 += learner2Score;
        testResults2[assignmentId2] = learner2Score / assignmentPointsPossible2;
      } else {
        totalScore2 = learner2Score - 15;
        testResults2[assignmentId2] = totalScore2 / assignmentPointsPossible2;
      }
      totalScores2 += totalScore2;
      assignmentsPointsPossible2 += assignmentPointsPossible2;
      avg2 = totalScores2 / assignmentsPointsPossible2;
    } else {
      continue;
    }
  }
  //=====================================================================================================//

  //=====================================================================================================//
  // learner1's for loop
  // This for loop calculates the total average
  // And programmatically use the assignments ID's as the key and the average per test as the value
  for (let i = 0; i < learner1.length; i++) {
    const learnerScore = learner1[i].submission.score;
    const dueDate = assignments[i].due_at;

    if (todaysDateIs > dueDate) {
      assignmentId1 = assignments[i].id;
      // console.log(assignmentID);
      assignmentPointsPossible1 = assignments[i].points_possible;
      totalScore1 += learnerScore;
      avg1 = totalScore1 / pointsPossibleTotal;
      testResults1[assignmentId1] = learnerScore / assignmentPointsPossible1;
    } else {
      continue;
    }
  }
  //=====================================================================================================//

  //=====================================================================================================//
  // Adding the "id" key and the learner 1's "ID" as the value to the "testResults1" Object
  testResults1.id = learnerTestId1;
  // Adding the "avg" key and the learner 1's "average" as the value to the "testResults1" Object
  testResults1.avg = avg1;
  //=====================================================================================================//

  //=====================================================================================================//
  // Adding the "id" key and the learner 1's "ID" as the value to the "testResults1" Object
  testResults2.id = learnerTestId2;
  // Adding the "avg" key and the learner 1's "average" as the value to the "testResults1" Object
  testResults2.avg = avg2;
  //=====================================================================================================//

  //=====================================================================================================//
  // Pushing the "testResults1" Object to the "results" array
  results.push(testResults1);
  results.push(testResults2);
  //=====================================================================================================//
  const result1 = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];
  //=====================================================================================================//
  // console.log(results);
  return results;
  //=====================================================================================================//
}

const totalResult = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(totalResult);
