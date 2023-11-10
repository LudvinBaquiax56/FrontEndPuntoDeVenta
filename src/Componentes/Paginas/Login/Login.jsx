import React, { useState } from 'react';

const IniciarSesion = ({ onLogin }) => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleLogin = () => {
        // Aquí podrías realizar una llamada a tu API para autenticar al usuario
        // Pero por simplicidad, asumiremos que la autenticación es exitosa siempre
        onLogin(nombreUsuario);
    };

    return (
        <div>
            <label>Nombre de Usuario:</label>
            <input type="text" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />

            <label>Contraseña:</label>
            <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />

            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};

export default IniciarSesion;
