import React,{Component} from "react";
import './style.css';

class Content extends React.Component{
    render(){
        return(
            <div className="content">
                <div className="table">
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>Reg.No</th>
                            <th>Name</th>
                            <th>College</th>
                            <th>Dept</th>
                            <th>Year of Passing</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>01</td>
                            <td>Deva</td>
                            <td>HICET</td>
                            <td>IT</td>
                            <td>2025</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>02</td>
                            <td>Myti</td>
                            <td>HICET</td>
                            <td>CSE</td>
                            <td>2025</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>03</td>
                            <td>Deepan</td>
                            <td>HICET</td>
                            <td>CSE</td>
                            <td>2025</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>04</td>
                            <td>Golul</td>
                            <td>HICET</td>
                            <td>CSE</td>
                            <td>2025</td>
                        </tr>
                    </table>
                </div>
                <div className="form">
                    <form>
                        <label>Username</label>
                        <input type="text" id="uname" placeholder="Username"></input>
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Password"></input>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Content;