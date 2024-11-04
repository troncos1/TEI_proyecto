import Link from 'next/link';
import { PiStudent } from 'react-icons/pi';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f5f5f5' }}>
      <header style={{ backgroundColor: '#0070f3', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Bienvenido</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <Link href="/">Inicio</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '20px', maxWidth: '800px', margin: '20px auto', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h2>Contenido Principal</h2>
        <Link href="">
            <p className="text-center text-blue-500 font-bold underline py-4">
              crear asistencia
            </p>
          </Link>
          <Link href="">
            <p className="text-center text-blue-500 font-bold underline py-4">
              generar QR
            </p>
          </Link>

        <p>.</p>
      </main>
      <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px' }}>
        <p>.</p>
      </footer>
    </div>
  );
};

export default Home;
