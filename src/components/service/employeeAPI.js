const BASE_URL = "http://localhost:4000/employees";

// READ
export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// CREATE
export const addEmployee = async (employee) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

// UPDATE
export const updateEmployee = async (id, employee) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

// DELETE
export const deleteEmployee = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
