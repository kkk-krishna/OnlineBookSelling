const swaggerJsdoc = require('swagger-jsdoc');

const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Store API',
            version: '1.0.0',
            description: 'API documentation for the Book Store application',
        },
        servers: [
            {
                url: process.env.SERVER_URL || 'http://localhost:4000',
                description: 'Development server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
    apis: [
        path.join(__dirname, '../controllers/*.js'), 
        path.join(__dirname, '../routers/*.js')
    ], // Absolute paths to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs; 