import React from 'react';

function Header() {
    return (
        <>
            <header>
                <div class="logo">
                <div class="logo-name">EDYODA</div>
                <div class="logo-stories">Stories</div>
                </div>
                
                <div class="dropdown">
                    Explore Categories <i class="fas fa-chevron-down"></i>
                </div>
                
                <div>
                    <p id="statement">EdYoda is free learning and knowledge
                sharing platform for techies</p>
                </div>
                <div class="btn-wrapper">
                    <button id="web-btn">
                    Go To Main Website
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;