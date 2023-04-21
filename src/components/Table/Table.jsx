import React, { useState } from 'react'
import '../Style.css'

const Table = (props) => {
    const [employeeList, setEmployeeList] = useState(props.employees);

    const handleDaysWorkedChange = (index, event) => {
      const newEmployeeList = [...employeeList];
      newEmployeeList[index].days = event.target.value;
      setEmployeeList(newEmployeeList);
    };
  
    const handleRateChange = (index, event) => {
      const newEmployeeList = [...employeeList];
      newEmployeeList[index].salaryPerDay = event.target.value;
      setEmployeeList(newEmployeeList);
    };
  
    const totalSalary = employeeList.reduce(
      (acc, employee) => acc + employee.days * employee.salaryPerDay,
      0
    );
  
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>surName</th>
              <th>Days</th>
              <th>Salary per day</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>
                  <input
                    type="number"
                    value={employee.days}
                    onChange={(event) => handleDaysWorkedChange(index, event)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={employee.salaryPerDay}
                    onChange={(event) => handleRateChange(index, event)}
                  />
                </td>
                <td>{employee.days * employee.salaryPerDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='totalSalary'>Total salary: {totalSalary}</p>
      </>
    );
}

export default Table