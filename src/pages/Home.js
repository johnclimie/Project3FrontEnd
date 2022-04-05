import React from 'react';

const Home = () => {
    return (
        <div id='container'>
            <div id='sidebar'>
                <div id='home-header'>
                    <h1>DevsHelp</h1>
                </div>

                <div id='userlist'>
                    <div class='user'>
                        <h3>User</h3>
                        <h4>Skilled in HTML, CSS</h4>
                    </div>
                    <div class='user'>
                        <h3>User 2</h3>
                        <h4>Skilled in React.js</h4>
                    </div>
                    <div class='user'>
                        <h3>User 3</h3>
                        <h4>Skilled in Node.js</h4>
                    </div>
                </div>
            </div>

            <div id="message-board">
                <header id="message-header">
                    <h1>You are now talking to johnclimie</h1>
                </header>


                <div id='chatlog'>

                </div>

                <div id='message-input'>
                    <textarea id='text-box' rows="3"></textarea>
                    <button id='send-btn'>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Home;