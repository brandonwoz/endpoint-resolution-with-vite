import './style.css';
import viteLogo from '/vite.svg';
import { fetchUser } from './api';

const username = async () => {
    const data = await fetchUser();
    return data.name;
};

document.querySelector('#app').innerHTML = `
    <header>
        <nav>        
            <a href="https://vitejs.dev" target="_blank">
                <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
        </nav>
        <div>Good Morning, ${await username()}!</div>
    </header>

  </div>
`;
