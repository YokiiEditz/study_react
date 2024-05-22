import { Link } from "react-router-dom";

const topics = [
    // { topicName: "Home", topicLinkName: "" },
    { topicName: "useState", topicLinkName: "useState" },
    { topicName: "useContext", topicLinkName: "useContext" },
    { topicName: "useReducer", topicLinkName: "useReducer" },
    { topicName: "usesOther", topicLinkName: "usesOther" },
    { topicName: "useExample", topicLinkName: "useExample" },
    { topicName: "Class-Component", topicLinkName: "class-comp" },
    { topicName: "react-form-hook", topicLinkName: "react-hook" },
];

const All = () => {
    return (
        <>
            <section>
                <ol>
                    {topics.map((item, id) => (
                        <li key={id}>
                            <Link to={`/${item.topicLinkName}`}>{item.topicName}</Link>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
};

export default All;
