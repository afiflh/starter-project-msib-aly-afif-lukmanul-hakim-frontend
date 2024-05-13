// import LoginCom from "../components/LoginCom";
import React from "react";
import { Img, Text, Input, Checkbox, Button } from "../components";

const Login = () => {
    return (

        <>
        <h1>HAI</h1>
            <div className="flex h-[600px] w-full items-center justify-center bg-[url(/src/assets/wallpaper gaming.jpg)] bg-cover bg-no-repeat px-14 pb-[114px] pt-[174px] md:h-auto md:p-5">
                <div className="flex w-[30%] flex-col items-center gap-[23px] rounded-[19px] border border-solid border-white-A700 bg-blue_gray-900px px-[7px] shadow-xl md:w-full">
                    <Img 
                        src="/src/assets/logo web.png" 
                        alt="logo image" 
                        className="ml-[19px] h-[40px] w-[73%] self-start object-cover md:ml-0"
                    />

                    <Text size="s" as="p" className="font-serif tracking-[-1.00px]">
                        Sign in to your account
                    </Text> */

                    <div className="flex w-[88%] flex-col items-center md:w-full">
                        <Input
                            shape="round"
                            type="email"
                            name="email field"
                            placeholder="e m a i l" 
                            className="self-stretch"
                        />
                        <Input 
                            shape="round"
                            type="password"
                            name="password field" 
                            placeholder="p a s s w o r d" 
                            className="mt-[19px] self-stretch"
                        />

                        <Checkbox
                            name="remember Checkbox"
                            label="Remember me"
                            id="RememberCheckbox"
                            className="mt-[15px] gap-[7px] self-start font-bold text-[10px] tracking-[-0.50px] text-white-A700"
                        />
                                                

                        /* <Button 
                            shape="round"
                            type="submit" 
                            className="mt-6 min-w-[81px] tracking-[0.90px]"
                        >
                            Login
                        </Button>
                        <Text as="p" className="tracking-[0.33px]">
                            Don't hace an account? Register here
                        </Text>

                    </div>

                </div>
            </div>
        </>

    );
};


export default Login