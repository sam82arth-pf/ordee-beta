import React from 'react'
import './LoginForm.css'
import { Link } from "react-router-dom";
import Cards from "./Cards";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maskStyle: {
                left: 512,
                right: 0
            }
        }

        this.container = React.createRef()
        // this.signUpBtn = React.createRef()

        this.onSignIn = this.onSignIn.bind(this)
        this.onSignUp = this.onSignUp.bind(this)
    }

    componentDidMount() {

    }
    componentWillUnmount() {
        clearInterval(this.interval);

    }

    onSignUp() {
        this.container.current.classList.add("right-panel-active");
    }
    onSignIn() {
        debugger
        this.container.current.classList.remove("right-panel-active");
    }

    render() {
        const clipValue = `inset(0 ${this.state.maskStyle.left}px 0 ${this.state.maskStyle.right}px)`
        // const clipValue =  `inset(0 200px 0 200px)`

        return (
            <div className="pflogo">
            <img
              className="logo"
              src={'./pf_circle.png'}
              alt=""
            />
           
                
            <div className="container" id="container" ref={this.container}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fab fa-facebook-f"></i>

                                </a>
                            <a href="#" className="social">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.onSignUp}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={this.onSignIn}>Sign in</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={this.onSignIn}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello,</h1>
                            <p>Enter your personal details and get on board with us</p>
                            <button className="ghost" id="signUp" onClick={this.onSignUp}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
             )
            
            }
        }
        
        export default LoginForm