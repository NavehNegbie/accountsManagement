export const managers = {
    1: {
        name: "Alice",
        supervisorId: null,
    },
    2: {
        name: "Bob",
        supervisorId: 1
    },
    3: {
        name: "Charlie",
        supervisorId: 1
    },
    4: {
        name: "Dave",
        supervisorId: 2
    },
    5: {
        name: "Eve",
        supervisorId: 3
    },
    6: {
        name: "Jonathan",
        supervisorId: 3
    },
    7: {
        name: "Robert",
        supervisorId: 6
    },
    8: {
        name: "Mika",
        supervisorId: 2
    },
    9: {
        name: "Daniel",
        supervisorId: 7
    }
}

export const accountsData = {
    1: {
        name: "HP",
        isActive: true,
        managerId: 1
    },
    2: {
        name: "IBM",
        isActive: true,
        managerId: 2
    },
    3: {
        name: "Google",
        isActive: true,
        managerId: 3
    },
    4: {
        name: "MySpace",
        isActive: false,
        managerId: 4
    },
    5: {
        name: "United",
        isActive: true,
        managerId: 4
    },
    6: {
        name: "JBL",
        isActive: true,
        managerId: 4
    },
    7: {
        name: "Apple",
        isActive: true,
        managerId: 7
    },
    8: {
        name: "Facebook",
        isActive: false,
        managerId: 6
    }
};
