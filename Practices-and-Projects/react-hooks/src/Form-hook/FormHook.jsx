import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

// type FormValues = {
//     username: string
//     email: string
//     channel: string
// }

const Formhook = () => {
    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState

    //   const { name, ref, onChange, onBlur } = register("username");
    // console.log(renderCount);
    renderCount++;
    // console.log(renderCount);

    const onSubmit = (data) => {
        console.log("Submitted", data);
    };

    return (
        <div>
            <h2>YouTube Form ({renderCount})</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    {/* <input
                              type="text"
                              id="username"
                              name={name}
                              ref={ref}
                              onChange={onChange}
                              onBlur={onBlur}
                            /> */}
                    <input
                        type="text"
                        id="username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required"
                            }
                        })}
                    />
                    <br />
                    <p className="error">{errors.username?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" {...register("email", {
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email"
                        },
                        validate: {
                            notAdmin: (fieldValue) => {
                                return (fieldValue !== 'admin@fun.com' || "Enter a different email address"
                                )
                            },
                            notBlackListed: (fieldValue) => {
                                return !fieldValue.endsWith("bad-domain.com") || "Domain not valided"
                            }
                        }
                    })} />
                    <br />
                    <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">channel</label>
                    <input
                        type="text"
                        id="channel"
                        {...register("channel", {
                            required: {
                                value: true,
                                message: "Channel is required"
                            }
                        })}
                    />
                    <p className="error">{errors.channel?.message}</p>
                </div>

                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default Formhook;
