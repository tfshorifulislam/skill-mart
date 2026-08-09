import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function InputFieldgroup() {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    return (
        <FieldGroup>
            <Field>
                <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                <Input
                    className="px-3 py-5 rounded-md "
                    id="fieldgroup-name" placeholder="your name" />
            </Field>
            <Field>
                <FieldLabel htmlFor="form-email" className="font-medium text-sm leading-5 text-[#191c1d]">Email address</FieldLabel>
                <Input className="px-3 py-5 rounded-md" id="form-email" type="email" placeholder="your@example.com" />
                <FieldDescription>
                    We&apos;ll never share your email with anyone.
                </FieldDescription>
            </Field>
            <div className="relative">
                <Field>
                    <FieldLabel className="font-medium text-sm leading-5 text-[#191c1d]" htmlFor="form-name">Password</FieldLabel>
                    <Input
                        className="px-3 py-5 rounded-md "
                        id="form-name"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                    />

                </Field>

                <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute right-3 top-10 cursor-pointer text-gray-500" > {showPassword ?
                        <EyeOff size={18} />
                        : <Eye size={18} />}
                </button>
            </div>

            <Field>
                <Button className='bg-[#3525CD] py-5 px-4 rounded-sm text-md font-medium leading-5 text-white hover:bg-[#3f2edd] cursor-pointer w-full' type="submit">
                    Submit
                </Button>
            </Field>

        </FieldGroup>
    )
}
