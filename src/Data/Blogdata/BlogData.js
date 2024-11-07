import img1 from "../../image/blog/hoc.jpeg";
import img2 from "../../image/blog/useref.png";

const Blogdata = [{
    id: 1,
    name: "HOC in React",
    des: "Higher Order Component (HOC) is an advanced technique in React.js. I try to explain this in very simple words with examples.Now, we should know what is HOC and what problems can be solved in real life using HOC? Higher Order Component is a function that received a component and returns a new component. It might be confusing now but it will be clear in the example. HOC helps the developers to reuse the component logic. It also helps to avoid the props drilling problem...",
    link:"https://alaminsahed.medium.com/higher-order-component-in-react-890817261ccc",
    img:img1
}
,
{
    id: 2,
    name: "Underrated hooks in react (useRef)",
    des: "React is introduced hooks with the functional components. Hooks are very useful and developers friendly. Hooks allow us to reuse the stateful logic without changing your component hierarchy. We use some hooks in our daily development work like useState, useEffect. But we don’t use some hooks very often. useRef is one of them. We discuss about this hook in this blog...",
    link:"https://alaminsahed.medium.com/underrated-hooks-in-react-useref-1c6197985cc4",
    img:img2
}]

export default Blogdata;