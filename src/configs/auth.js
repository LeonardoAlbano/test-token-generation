// Define um módulo para exportar as configurações relacionadas a JWT
module.exports = {
    // Configurações para JWT
    jwt: {
        // Chave secreta usada para assinar (sign) e verificar (verify) os tokens JWT
        secret: "default",
        // Tempo de expiração do token JWT, neste caso, 1 dia
        expiresIn: "1d",
    }
}
