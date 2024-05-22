import { useState, useCallback } from "react"
import Count from "./Count"
import Button from "./Button"
import Title from "./Title"
import CallBacks from "./CallBacks"

const Callback = () => {
    console.log("/////////////////");
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(45000)

    const incremAge = useCallback(() => {
        setAge(age => age + 2)
    }, [age])

    const incremSalary = useCallback(() => {
        setSalary(salary => salary + 2000)
    }, [salary])

    return (
        <>
            <br />
            <CallBacks />
            <br />
            <h2>useCallback HOOK</h2>
            <Title />
            <div>
                <Count text="Age" count={age} />
                <Button handleClick={incremAge}>Increment Age</Button>
                <Count text='salary' count={salary} />
                <Button handleClick={incremSalary}>Increment salary</Button>
            </div >
        </>
    )
}

export default Callback