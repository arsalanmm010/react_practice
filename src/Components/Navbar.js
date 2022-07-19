import logo from '../react-image.png'

export default function Navbar() {
    return(
        <section className='head'>
            <nav className='nav'>
                <img src={logo} className="img"/>
                <h3>ReactFacts</h3>
                <h4>React Course-Project 1</h4>
            </nav>
        </section>
    )
}