const cardTag = {
    useEffect: "useEffect",
    useState: "useState",
    useRef: "useRef",
  };

const codeCards = [
    {
        cardNumber: 1,
        title: "useState Hook",
        description: "Re-learned about the useState hook and good practices, along with what to avoid when using it.",
        cardTags:[cardTag.useState],
        path:'Component1',
    },
    {
        cardNumber: 2,
        title: "useEffect Hook",
        description: "Re-learned about the useEffect hook and good practices such as cleaning up event listeners by returning a function in the useEffect hook.",
        cardTags:[cardTag.useEffect,cardTag.useState],
        path:'Component2',
    },
    {
        cardNumber: 3,
        title: "Time Management Calculator",
        description: "Time management calculator for students in following the ECTS system.",
        cardTags:[cardTag.useEffect,cardTag.useState],
        path:'Component3',
    },

]


export default codeCards;