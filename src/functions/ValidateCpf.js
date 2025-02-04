const { app } = require('@azure/functions');
function validateCPF(cpf) {
    // Null-safe check
    if (!cpf) {
        return false;
    }

    // Remove non-numeric characters
    cpf = cpf.replace(/\D/g, '');

    // Check if the length is 11 or if it's all the same character
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Validate first digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Validate second digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
};
app.http('ValidateCpf', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const cpf = request.query.get('cpf') 
                        || await request.text();

        const isValid = validateCPF(cpf);

        return { body: `{ "cpf": "${cpf}", "isValid": "${isValid}"}` };
    }
});
