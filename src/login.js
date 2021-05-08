import React from 'react';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        let users = localStorage.getItem("pharma-users");
        if(users === null) {
            users = [
                {
                    userName: "test-admin",
                    password: "test-admin",
                    userType: "manager"
                },
                {
                    userName: "test-sales",
                    password: "test-sales",
                    userType: "salesExec"
                }
            ];
            this.state = {
                usersInfo: users
            };
        } else {
            this.state = JSON.parse(users);
        }
    }

    loginHandler = () => {
        let uname = document.getElementById("userName");
        let upwd = document.getElementById("password");
        let usr = this.state.usersInfo.find((e) => e.userName === uname.value && e.password === upwd.value)
        if(usr != undefined) {
            if(usr.userType === "manager") {
                localStorage.setItem("pharma-loggedInUserType", "manager");
                this.props.history.push("/manager")
            } else {
                localStorage.setItem("pharma-loggedInUserType", "salesExec");
                this.props.history.push("/salesExecutive")
            }
            localStorage.setItem("pharma-isLoggedIn", "true");
        } else {
            uname.value = "";
            upwd.value = "";
            alert("Incorrect Username or Password!");
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        if(localStorage.getItem("pharma-users") === null) {
            localStorage.setItem("pharma-users", JSON.stringify(this.state));
        }
    }

    render () {
        return (
            <div className="w-25 h-25 text-center mt-5 p-5 shadow mx-auto">
                <h1>Welcome!</h1>
                <div className="input-group mb-4 shadow-sm">
                    <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
                    <input id="userName" type="text" className="form-control" placeholder="Username" required/>
                </div>
                <div className="input-group mb-4 shadow-sm">
                    <span className="input-group-text"><i className="bi bi-key"></i></span>
                    <input id="password" type="password" className="form-control" placeholder="Password" required/>
                </div>
                <button className="w-75 btn btn-success rounded-pill shadow" onClick={this.loginHandler}> <i className="bi bi-unlock"></i> Sign In </button>
            </div>
        );
    }
}

export default LogIn;