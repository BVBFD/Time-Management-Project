import React, { Component } from 'react';

class Navbar extends Component {
    onTotalToDoCount = () => {
        const count = this.props.onTotalToDoCount();
        return count;
    };

    render() {
        return (
            <nav className="navbar">
                <div className="navbar_name_count">
                    <span>Time Management</span>
                    <i className="fas fa-business-time fa-lg"></i>
                    <span className="navbar_count">{this.onTotalToDoCount()}</span>
                </div>
                <div className="navbar_Day-Month-Year">
                    <span>Daily</span>
                    <span>Monthly</span>
                    <span>Yearly</span>
                </div>
            </nav>
        );
    }
}

export default Navbar;