import React from 'react'
import LeftNavigationBar from '../LeftNavigationBar/LeftNavigationBar';
import './FAQs.css';
const FAQs = () => {
    return (
        <div className="parentDashboardContainer">
            <div className="DashboardContainer">
                <div className="leftNavigationbar">
                    <LeftNavigationBar />
                </div>
                <div className="rightNavigationbar">
                    <div className="FAQ_div">
                        <h3 className="FAQ_header">FAQs</h3>
                        <div className="FAQ_Question1">
                            <p className="Q1">What happens when I update my email address (or mobile number)?</p>
                            <p className="Q1_ans">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                        </div>
                        <div className="FAQ_Question2">
                            <p className="Q2">When will my Groca account be updated with the new email address (or mobile number)?</p>
                            <p className="Q2_ans">t happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                        </div>
                        <div className="FAQ_Question3">
                            <p className="Q3">What happens to my existing Groca account when I update my email address (or mobile number)?</p>
                            <p className="Q3_ans">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                        </div>
                        <div className="FAQ_Question4">
                            <p className="Q4">Does my Seller account get affected when I update my email address?</p>
                            <p className="Q4_ans">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                        </div>
                        {/* <div className="FAQ_Question5">
                            <p className="Q5">What happens when I update my email address (or mobile number)?</p>
                            <p className="Q5_ans">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs
