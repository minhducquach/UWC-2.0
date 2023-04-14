const Task = [
  {
    code: "TASK0001",
    description: "Dọn rác phường 2 Quận 2",
    janitor: [
      {
          staffID: "JN0001",
          name: "Nguyen Van A",
          phone: "088765212",
          address: "132/12 Nguyen Oanh",
          ward: "2",
          district: "Quan 2",
          mcp: "38 Le Loi",
          vehicle: "TK0001"
      },
      {
          staffID: "JN0002",
          name: "Nguyen Van B",
          phone: "077765212",
          address: "9 Nguyen Oanh",
          ward: "2",
          district: "Quan 2",
          mcp: "16 Quang Trung",
          vehicle: "TK0002"
      },
      {
          staffID: "JN0003",
          name: "Nguyen Van C",
          phone: "022765212",
          address: "9 Van Luong",
          ward: "2",
          mcp: "12 Le Van Duyet",
          vehicle: "TK0003"
      }
    ],
    collector: [{
      name: "Tran Van T",
      phone: '091827171',
      ID: "C010121",
      vehicle: "TK0002",
      address: "94 Van Luong Kha",
      ward: "2",
      district: "Quan 2"
    }],
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
