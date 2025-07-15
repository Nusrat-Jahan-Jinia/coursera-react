import logo from '../logo.jpg';

function Footer(){
    return(
        <footer className='footer-container'>
            <img src={logo} alt="Little Lemon Logo"/>
            <div>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/Booking">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                </ul>
            </div>
            <div className='footer-contact'>
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;