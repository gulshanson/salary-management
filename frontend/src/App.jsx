import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/employees")
      .then(res => setEmployees(res.data));
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      {employees.map(e => (
        <div key={e.id}>
          {e.fullName} - {e.salary}
        </div>
      ))}
    </div>
  );
}

export default App;
