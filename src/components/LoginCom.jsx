import { Link } from 'react-router-dom';

const LoginCom = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-white '>
            <img
                src='./src/assets/wallpaper gaming.jpg'
                alt='Your description'
                className='h-screen w-1/3 mr-10 absolute left-0'
            />

            <div className='max-w-md w-full space-y-8 ml-[500px]'>
                <h3 className='text-center text-black tracking-widest text-3xl font-extrabold'>
                    Leo&apos;s Game Store
                </h3>
                <div className='w-96 bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Sign in to your account
                        </h1>
                        <form
                            className='mt-8 space-y-6'
                            action='#'
                            method='POST'
                        >
                            <input type='hidden' name='remember' value='true' />
                            <div className='rounded-md shadow-sm -space-y-px'>
                                <div>
                                    <label
                                        htmlFor='email-address'
                                        className='sr-only'
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id='email-address'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        required
                                        className='rounded-3xl relative block w-full px-3 py-2 placeholder-gray-500 bg-white mb-6 shadow-2xl border-2 border-white text-black'
                                        placeholder='e m a i l'
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='sr-only'
                                    >
                                        Password
                                    </label>
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        autoComplete='current-password'
                                        required
                                        className='rounded-3xl relative block w-full px-3 py-2 placeholder-gray-500 bg-white mb-5 shadow-2xl border-2 border-white'
                                        placeholder='p a s s w o r d'
                                    />
                                </div>
                                <input
                                    type='hidden'
                                    name='remember'
                                    value='true'
                                />

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center mb-5'>
                                        <input
                                            id='remember_me'
                                            name='remember_me'
                                            type='checkbox'
                                            className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                                        />
                                        <label
                                            htmlFor='remember_me'
                                            className='ml-2 block text-sm text-white'
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <Link to='/profil'>
                                    <button
                                        type='submit'
                                        className='w-24 flex justify-center py-2 px-4 border border-transparent text-lg tracking-widest font-medium rounded-3xl shadow-2xl text-white bg-[#3589C1] hover:bg-indigo-700 mb-1'
                                    >
                                        Login
                                    </button>
                                </Link>
                                <p className='text-white'>
                                    Don&apos;t have an account?
                                    <Link to='/register'>Register here</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginCom;
