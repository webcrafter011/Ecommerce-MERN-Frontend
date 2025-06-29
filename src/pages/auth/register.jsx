import CommonForm from "@/components/common/form";
import { registerFormControls } from "../../config";
import { Link } from "react-router-dom";
import { useState } from "react";

const initialState = {
    userName: '',
    password: '',
    email: ''
}

const onSubmit = () => { }

const AuthRegister = () => {
    const [formData, setFormData] = useState(initialState)

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    Create new account
                </h1>
                <p className="mt-2">
                    Already have an account
                    <Link
                        className="font-medium ml-2 text-primary hover:underline"
                        to={"/auth/login"}
                    >
                        Login
                    </Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={'Sign Up'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onsubmit}
            />
        </div>
    )
}

export default AuthRegister;