import React from 'react'

const Select = ({ grades, onChange, value }) => {
  const getGrade = grade => grade.split(' ')[0];
  const GradeOptions = () => grades?.map(
    (grade, idx) => <option key={`${idx}-${grade}`} value={grade}>{getGrade(grade)}</option>
  )

  return(
    <select
      name="grades"
      className="rounded-md border-2 border-gray-300 w-1/2 mb-4"
      onChange={onChange}
    >
      <GradeOptions /> 
    </select>
  );
}

export default Select