const { app } = require('@azure/functions');

app.http('helloWorld', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            context.log(`Http function processed request for url "${request.url}"`);
            const { name } = JSON.parse(await request.text());
            if (!name) {
                return { status: 400, body: "Bad request" };
            }

            return { status: 200, body: `Hello ${name}!` };
        } catch (error) {
            return { status: 500, body: error.message }
        }
    }
});
