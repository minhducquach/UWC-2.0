const Task = [
  {
    code: "TASK0001",
    description: "Dọn rác phường 11 Gò Vấp",
    janitor: [
      {
        name: "Nguyen Van A",
        ID: "J010121",
        vehicleCode: "TK0001",
      },
      {
        name: "Nguyen Van B",
        ID: "J010122",
        vehicleCode: "TR0004",
      },
      {
        name: "Nguyen Van C",
        ID: "J010123",
        vehicleCode: "TR0008",
      },
    ],
    collector: {
      name: "Tran Van T",
      ID: "C010121",
      vehicleCode: "TK0002",
    },
    route: ["43 Le Van Duyet", "21 Quang Trung", "15 Le Loi"],
    startDate: "2023/01/01",
    startTime: "18:00",
    state: "0",
  },
  {
    code: "TASK0002",
    description: "Dọn rác Phường 5, Quận 1",
    janitor: [
      {
        name: "Nguyen Van E",
        ID: "J010161",
        vehicleCode: "TR0002",
      },
      {
        name: "Nguyen Van F",
        ID: "J010172",
        vehicleCode: "TR0005",
      },
      {
        name: "Nguyen Van G",
        ID: "J010191",
        vehicleCode: "TR0009",
      },
    ],
    collector: {
      name: "Tran Van V",
      ID: "C010122",
      vehicleCode: "TK0002",
    },
    route: ["43 Le Van Duyet", "21 Quang Trung", "15 Le Loi"],
    startDate: "2023/01/01",
    startTime: "18:00",
    state: "0",
  },
  {
    code: "TASK0003",
    description: "",
    janitor: [
      {
        name: "Nguyen Van Y",
        ID: "J010123",
        vehicleCode: "TR0003",
      },
      {
        name: "Nguyen Van B",
        ID: "J010126",
        vehicleCode: "TR0006",
      },
      {
        name: "Nguyen Van C",
        ID: "J010127",
        vehicleCode: "TR0010",
      },
    ],
    collector: {
      name: "Tran Van T",
      ID: "C010121",
      vehicleCode: "TK0003",
    },
    route: ["43 Le Van Duyet", "21 Quang Trung", "15 Le Loi"],
    startDate: "2023/01/01",
    startTime: "18:00",
    state: "0",
  },
];
export default Task;
