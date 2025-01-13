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
  // here, we would process this data to achieve the desired result.
  let { courseId, name } = courseInfo;
  let { assignmentId, asignmentName, assignmentCourse_id, group_weight, assignments } =
    assignmentGroup;

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

    for (let i = 0; i < learnerSubmissions.length; i++) {
      let learnersId = learnerSubmissions[i].learner_id;
      let assignmentsId = learnerSubmissions[i].assignment_id;
      let submissionScore = learnerSubmissions[i].submission.score;

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
  const result = [
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

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
