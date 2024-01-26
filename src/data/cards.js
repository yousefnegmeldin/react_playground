const cardTag = {
    useEffect: "useEffect",
    useState: "useState",
    useRef: "useRef",
  };

const codeCards = [
    {
        cardNumber: 1,
        title: "React Form",
        description: "First ever card! so nice so easy so simple, so nice so easy so simple, so nice so easy so simple agsdfgafg gaysfgaysf fayayfagfgagsaf sy sygs  ",
        cardTags:[cardTag.useEffect,cardTag.useState,cardTag.useRef,cardTag.useEffect],
        path:'Component1',
    },
    {
        cardNumber: 2,
        title: "useMemo Hook",
        description: "First ever card!",
        cardTags:[cardTag.useEffect,cardTag.useState],
        path:'/test1',
    },
    {
        cardNumber: 3,
        title: "First card",
        description: "First ever card!",
        cardTags:[cardTag.useEffect,cardTag.useState],
        path:'/test1',
    },
]


export default codeCards;