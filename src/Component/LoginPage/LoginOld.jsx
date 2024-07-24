// import React from 'react';
// import { Authenticator }  from '@aws-amplify/ui-react';
// import Logo from '../../Assets/images/logo/BigBrainLogoBlue.png';
// import loginImg from '../../Assets/images/character/LoginPageBg.png';
// import Navigation from '../Homepage/Navbar/Navbar';
// import Footer from '../Homepage/Footer/Footer';
// import { useNavigate } from 'react-router-dom';
//
// function Login() {
//     const navigate = useNavigate();
//     // const [email, setEmail] = useState('');
//     // const [password, setPassword] = useState('');
//
//     // const handleLogin = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         await Auth.signIn(email, password);
//     //         if (email.endsWith('@thebigbraintech.com')) {
//     //             navigate('/dashboard');
//     //             console.log("signin success to dashboard");
//     //         } else {
//     //             navigate('/profile');
//     //             console.log("signin success to profile");
//     //         }
//     //     } catch (error) {
//     //         console.log('Error signing in', error);
//     //     }
//     // };
//
//     const handleLogoClick = () => {
//         navigate('/');
//     };
//
//     return (
//         <div>
//             <section className="mb-24">
//                 <Navigation/>
//             </section>
//
//     <Authenticator>
//         {({signOut}) => (
//             <div>
//
//             <div className="relative min-h-screen">
//                     <img src={loginImg} className="w-screen h-[800px]" alt="Sign In"/>
//                     <div className="absolute top-0 right-0 mt-16 mr-16 w-full max-w-md">
//                         <div className="bg-white p-12 rounded-lg shadow-lg mt-20 mr-20">
//                             <div className="flex justify-center mb-6">
//                                 <button onClick={handleLogoClick} className="focus:outline-none">
//                                     <img src={Logo} alt="Company Logo" className="w-48"/>
//                                 </button>
//                             </div>
//                             <button onClick={signOut}>Sign Out</button>
//                         </div>
//                     </div>
//                 </div>
//                 <section>
//                     <Footer/>
//                 </section>
//             </div>
//
//
//         )}
//         </Authenticator>
//         </div>
//     );
// }
//
// export default Login;
