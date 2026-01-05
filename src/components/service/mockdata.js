export const getEmployees = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "EMP001",
          name: "Emma Johnson",
          gender: "Female",
          dob: "1990-09-15",
          state: "Telangana",
          active: true,
          image: "https://i.pravatar.cc/150?img=47",
        },
        {
          id: "EMP002",
          name: "Alex Carter",
          gender: "Male",
          dob: "1988-05-22",
          state: "Karnataka",
          active: true,
          image: "https://i.pravatar.cc/150?img=12",
        },
        {
          id: "EMP003",
          name: "Sarah Lee",
          gender: "Female",
          dob: "1992-11-05",
          state: "Maharashtra",
          active: false,
          image: "https://i.pravatar.cc/150?img=32",
        },
      ]);
    }, 1000); // simulate API delay
  });
};
