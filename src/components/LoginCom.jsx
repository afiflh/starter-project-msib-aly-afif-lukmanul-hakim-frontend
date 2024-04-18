import React from 'react';

const LoginCom = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white ">
            
            <img 
                src="./src/assets/wallpaper gaming.jpg" 
                alt="Your description" 
                className="h-screen w-1/3 mr-10 absolute left-0"
            />
            
            
            <div className="max-w-md w-full space-y-8 ml-[500px]">
                <h3 className='text-center text-black tracking-widest text-3xl font-extrabold'>
                    Leo's Game Store
                </h3>
                <div className='bg-gray-200 p-5 w-96 rounded-lg'>
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-black mb-12 tracking-widest">
                            LOGIN
                        </h2>
                    </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="rounded-3xl relative block w-full px-3 py-2 placeholder-gray-500 bg-white mb-6 shadow-2xl border-2 border-white text-black"
                                        placeholder="e m a i l" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="rounded-3xl relative block w-full px-3 py-2 placeholder-gray-500 bg-white mb-12 shadow-2xl border-2 border-white"
                                        placeholder="p a s s w o r d" />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-24 flex justify-center py-2 px-4 border border-transparent text-lg tracking-widest font-medium rounded-3xl shadow-2xl text-white bg-[#3589C1] hover:bg-indigo-700 ml-32 mb-1"
                                >
                                    Login
                                </button>
                                <p className='text-black'>Don't have an account? <a href="">Register here</a></p>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default LoginCom;