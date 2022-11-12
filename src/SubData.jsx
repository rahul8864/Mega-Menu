const subListData = [
    {
      name: "Home",
      data: [
        { id: 1, userId: 1, subName: "Aerobot", description: "No Data" },
        { id: 2, userId: 1, subName: "To Do", description: "No Data" },
        { id: 3, userId: 1, subName: "My Dashboard", description: "No Data" },
        { id: 4, userId: 1, subName: "Messenger", description: "No Data" },
        { id: 5, userId: 1, subName: "Maps", description: "No Data" },
        { id: 6, userId: 1, subName: "Notifications", description: "No Data" },
        { id: 7, userId: 1, subName: "Data Sources", description: "No Data" },
        { id: 8, userId: 1, subName: "Settings", description: "No Data" },
      ],
    },
    {
      name: "Operations",
      data: [
        { id: 1, userId: 2, subName: "Dashboard", description: "" },
        {
          id: 2,
          userId: 2,
          subName: "Airfield Condition Reporting",
          description: "",
        },
        { id: 3, userId: 2, subName: "Operations Log", description: "" },
        { id: 4, userId: 2, subName: "Phonebook", description: "" },
        { id: 5, userId: 2, subName: "Dashboard", description: "" },
      ],
    },
    {
      name: "Inspections",
      data: [
        { id: 1, userId: 3, subName: "Inspections", description: "" },
        { id: 2, userId: 3, subName: "Bulk Export", description: "" },
        { id: 3, userId: 3, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Work Orders",
      data: [
        { id: 1, userId: 4, subName: "Dashboard", description: "" },
        { id: 2, userId: 4, subName: "Airfield Work Orders", description: "" },
        {
          id: 3,
          userId: 4,
          subName: "Non-Airfield Work Orders",
          description: "",
        },
        {
          id: 4,
          userId: 4,
          subName: "Preventative Maintenance",
          description: "",
        },
        { id: 5, userId: 4, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Asset Managment",
      data: [
        { id: 1, userId: 5, subName: "Dashboard", description: "" },
        { id: 2, userId: 5, subName: "Asset Registry", description: "" },
        { id: 3, userId: 5, subName: "Airfield Assets", description: "" },
        { id: 4, userId: 5, subName: "Lanside Assets", description: "" },
        { id: 5, userId: 5, subName: "Inventory", description: "" },
        { id: 6, userId: 5, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Shift Managment",
      data: [
        { id: 1, userId: 6, subName: "Tasks", description: "" },
        { id: 2, userId: 6, subName: "Assigment", description: "" },
      ],
    },
    {
      name: "WildLife",
      data: [
        { id: 1, userId: 7, subName: "Dashboard", description: "" },
        { id: 2, userId: 7, subName: "Wildlife Log", description: "" },
        { id: 3, userId: 7, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Lease Management",
      data: [
        { id: 1, userId: 8, subName: "Dashboard", description: "" },
        { id: 2, userId: 8, subName: "Properties", description: "" },
        {
          id: 3,
          userId: 8,
          subName: "Non-Airfield Work Orders",
          description: "",
        },
        { id: 4, userId: 8, subName: "Invoices", description: "" },
        { id: 5, userId: 8, subName: "Tenants", description: "" },
        { id: 6, userId: 8, subName: "Hangar Inspections", description: "" },
        { id: 7, userId: 8, subName: "Contacts", description: "" },
        { id: 8, userId: 8, subName: "Based AirCrafts", description: "" },
        { id: 9, userId: 8, subName: "Portal", description: "" },
        { id: 10, userId: 8, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Portal",
      data: [
        { id: 1, userId: 9, subName: "Tenant Portal", description: "" },
        { id: 2, userId: 9, subName: "Portal Users", description: "" },
      ],
    },
    {
      name: "Training Management",
      data: [
        { id: 1, userId: 10, subName: "Dashboard", description: "" },
        { id: 2, userId: 10, subName: "Training Log", description: "" },
        { id: 3, userId: 10, subName: "Settings", description: "" },
      ],
    },
    {
      name: "FOD Log",
      data: [
        { id: 1, userId: 11, subName: "Dashboard", description: "" },
        { id: 2, userId: 11, subName: "FOD Log", description: "" },
        { id: 3, userId: 11, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Froms",
      data: [
        { id: 1, userId: 12, subName: "Forms", description: "" },
        { id: 2, userId: 12, subName: "Form Data", description: "" },
        { id: 3, userId: 12, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Noise Managment",
      data: [
        { id: 1, userId: 13, subName: "Dashboard", description: "" },
        { id: 2, userId: 13, subName: "Noise Log", description: "" },
        { id: 3, userId: 13, subName: "Settings", description: "" },
      ],
    },
    {
      name: "SMS",
      data: [
        { id: 1, userId: 14, subName: "Dashboard", description: "" },
        { id: 2, userId: 14, subName: "Risk Register", description: "" },
        { id: 3, userId: 14, subName: "Corrective Actions", description: "" },
        { id: 4, userId: 14, subName: "Settings", description: "" },
      ],
    },
    {
      name: "Badge Management",
      data: [
        { id: 1, userId: 15, subName: "Badges", description: "" },
        { id: 2, userId: 15, subName: "Settings", description: "" },
      ],
    },
    {
      name: "LMS",
      data: [
        { id: 1, userId: 16, subName: "Calendar", description: "" },
        { id: 2, userId: 16, subName: "My Trainings", description: "" },
        { id: 3, userId: 16, subName: "Manage Trainings", description: "" },
        { id: 4, userId: 16, subName: "Logs", description: "" },
        { id: 5, userId: 16, subName: "Settings", description: "" },
      ],
    },
  ];

  export default subListData