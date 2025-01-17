/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="No Image Available" width="200" height="200" />
      <h3> Email: {student.email} </h3>
      <h3> GPA: {student.gpa} </h3>
      <h3> Campus: {student.campus?.name}</h3>
    </div>
  );

};

export default StudentView;