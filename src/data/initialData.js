export const initialData = {
    tasks: [
        {
            id: 1, content: `Start with meditation, exercise & breakfast
for a productive day`,
            board: "Todo"
        },
        {
            id: 2,
            content: "Read to learn something new every day",
            board: "Todo"
        },
        {
            id: 3,
            content: "Learn something fresh & relevant",
            board: "Todo"
        },
        {
            id: 4,
            content: "Engage & question in meetings",
            board: "Doing"
        },
        {
            id: 5,
            content: "Use time-blocking for effective days",
            board: "Doing"
        },
        {
            id: 6,
            content: "Finished online course - check!",
            board: "Done"
        },
        {
            id: 7,
            content: `Congratulate yourself for incorporating healthier
habits into your lifestyle, like regular exercise
or mindful eating`,
            board: "Done"
        },
    ],
    boards: {
        "Todo": {
            id: "Todo",
            title: "Todo",
            bg: "#FEF4F3",
            titleColor: "#6E1E29",
            subTitleColor: "#D4AFB4",
            newButtonColor: "#D37A87",
            checkboxBorderColor: "#EDD6D3",
            taskBorderColor: "#F3E1DF",
            removeIconColor: "#F4C5CB"
        },
        "Doing": {
            id: "Doing",
            title: "Doing 💪",
            bg: "#FFFBF2",
            titleColor: "#795B19",
            subTitleColor: "#DECCA4",
            newButtonColor: "#C2A25B",
            checkboxBorderColor: "#DBD2BC",
            taskBorderColor: "#EAE2CF",
        },
        "Done": {
            id: "Done",
            title: "Done 🎉",
            bg: "#F4F9F3",
            titleColor: "#286C1A",
            subTitleColor: "#BCD7B6",
            checkboxBorderColor: "#D0E7CB",
            taskBorderColor: "#DDEED9",
            checkboxIconColor: "#9BCD90"
        },
    },
}