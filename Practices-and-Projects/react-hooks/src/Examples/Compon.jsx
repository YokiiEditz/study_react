import StopWatch from "./StopWatch";
import ImageSilder from "./ImageSilder";
import Digital from "./Digital";

const Compon = () => {
    return (
        <>
            <Digital />
            {/* <Digital />
            <Digital />
            <Digital /> */}
            <div className="watch">
                <StopWatch />
            </div>
            <ImageSilder />
        </>
    );
};

export default Compon;
