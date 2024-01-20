import { backendUrl } from "./Constants";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    // Route /auth/login and body will contain Body
    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(body);
    });

    return await response.json();
};