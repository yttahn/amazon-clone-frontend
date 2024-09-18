import React, {useState, useContext} from 'react';
import AmazonLogo from '../../assets/amazon_logo.png'
import classes from './SignUp.module.css'
import { auth } from '../../Utility/firebase'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { ClipLoader } from 'react-spinners';
import {Type} from "../../Utility/action.type";


function Auth () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [{user}, dispatch] = useContext(DataContext)
    const [loading, setLoading] = useState({
        signIn:false,
        signUp:false
    })
    const navigate = useNavigate();
    const navStateData = useLocation()

    const authHandler = async(e) => {
        e.preventDefault();
        if (e.target.name == "signin"){
            setLoading({...loading, signIn:true})
            signInWithEmailAndPassword(auth, email, password)
            .then((userInfo)=>{
                // console.log(userInfo)
                dispatch({
                    type: Type.SET_USER,
                    user: userInfo.user
                });
                setLoading({...loading, signIn:false})
                navigate(navStateData?.state?.redirect||"/")
                // console.log("navigate")
                // navigate("/")
            })
            .catch((err)=>{
                setError(err.message)
                setLoading({...loading, signIn:false})
            })
        }
        else{
            setLoading({...loading, signUp:true})
            createUserWithEmailAndPassword(auth, email, password)
            .then((userInfo)=>{
                console.log(userInfo)
                dispatch({
                    type:Type.SET_USER,
                    user:userInfo.user
                });
                setLoading({...loading, signUp:false})
                navigate(navStateData?.state?.redirect||"/")
            })
            .catch((err)=>{
                setError(err.message)
                // console.log(err)
                setLoading({...loading, signUp:false})
            })
        }
    }

    return (
        <section className={classes.login}>
            <a>
                <img src={AmazonLogo} alt="descrAmazon logo" />
            </a>

            <div className = {classes.login__container}>
                <h1>Sign In</h1>
                {navStateData?.state?.msg && (
                    <small
                        style={{
                            padding: "5px",
                            textAlign: "center",
                            color: "red",
                            fontWeight: "bold",
                        }}
                    >{navStateData?.state?.msg}</small>
                )}
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value ={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value ={password} onChange={(e)=>setPassword(e.target.value)}type="password" id='password' />
                    </div>
                    <button 
                        type ="submit" 
                        onClick = {authHandler} 
                        name ="signin"
                        className={classes.login__signInButton}>
                        {loading.signIn?(<ClipLoader color="#000"size={15} />):("Sign In")}
                    </button>
                </form>
                <p>
                    By signing-in, you agree to our conditions of use and sale. Please see our privacy Notice, out cookies Notice and our Interest-Bases Ads Notice.
                </p>
                <button 
                    type ="submit" 
                    onClick = {authHandler} 
                    name="signup"
                    className={classes.login__registerButton}>
                        {loading.signUp?(<ClipLoader color="#000"size={15} />):"Create your Amazon Accout"}
                </button>
                {
                    error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small>
                }
            </div>
        </section>
    );
}

export default Auth;
