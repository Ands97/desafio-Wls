import './header.css';
import { Link } from 'react-router-dom';

export const Header = ()=>{
    return (
        <header className='header'>
            <div className="profile">
                <div className='profileImg'>
                    <img src="../../../images/profileIcon.svg"/>
                </div>
                <div className='profileInfo'>
                    <span>Nome</span>
                    <span className='function'>Função</span>
                </div>
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <Link to='/'>
                            <img src='../../../images/task.svg'/>
                            <span>Tarefas</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <img src='../../../images/about.svg' />
                            <span>Sobre</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}