import { useId } from "react";

const Id = () => {

    const Id = useId()
    const Id2 = useId()

    return (
        <>
            <section>
                <h2>useId HOOK</h2>
                <div>
                    <label htmlFor={`${Id}-email`}>Email</label>
                    <input id={`${Id}-email`} type="text" />
                </div>
                <div>
                    <label htmlFor={Id2}>name:</label>
                    <input id={Id2} type="text" />
                </div>
                {/* // import {useId} from "react"
                // const uniqueId = useId()
                {/* <div>
                <label htmlFor={uniqueId}>Email</label>
                <input id={uniqueId} type="text" />
                </div>  */}
            </section>
        </>
    );
};

export default Id;
