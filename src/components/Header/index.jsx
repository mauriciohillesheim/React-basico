import { Link } from 'react-router-dom'
import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import './styles.css'

export default function Header(){
    return (
        <header>
            <h1>Minha Página React</h1>
            <img src={reactLogo} alt='Logo do React' />
            <img src={viteLogo} alt='Logo do Vite' />
            <nav className="menu">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/api">
                        <li>Rick And Morty API</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}