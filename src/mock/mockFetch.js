export default async function mockFetch(url) {
    switch (url) {
        case "https://jsonplaceholder.typicode.com/users": {
            return {
                ok: true,
                status: 200,
                json: async () => {},
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}