import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const printEmployee = (employee) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Employee Details", 14, 20);

  autoTable(doc, {
    startY: 30,
    head: [["Field", "Value"]],
    body: [
      ["Employee ID", employee.empId || employee.id],
      ["Name", employee.name],
      ["Gender", employee.gender],
      ["Date of Birth", employee.dob],
      ["State", employee.state],
      ["Status", employee.active ? "Active" : "Inactive"],
    ],
  });

  doc.save(`${employee.name}_details.pdf`);
};
