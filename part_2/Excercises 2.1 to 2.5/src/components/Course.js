
const calculateTotalExercises = (parts) => {
    return parts.reduce((sum, part) => sum + part.exercises, 0);
  };
  

  const renderParts = (parts) => {
    return parts.map((part) => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ));
  };

  const renderCourseName = (name) => {
    return <h2>{name}</h2>;
  };
  
  const Course = ({ courses }) => {
    return (
      <div style={{ marginLeft: "20px" }}>
        {courses.map((course) => (
          <div key={course.id}>
            {renderCourseName(course.name)}
            {renderParts(course.parts)}
            <h4>Total of {calculateTotalExercises(course.parts)} exercises</h4>
          </div>
        ))}
      </div>
    );
  };
  
  export default Course;
  