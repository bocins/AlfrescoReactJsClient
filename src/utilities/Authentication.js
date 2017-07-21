import axios from "axios";

export const login = (userId, password) => {
    return new Promise((resolve) => {
        if (getTicket()) {
            // The user is already authenticated so nothing more is required...
            //this.onChange(true);
            resolve(true);
        }
        else {
            // There is no session ticket in local storage so we need to make an XHR
            // request to get one...
            axios.post("/api/-default-/public/authentication/versions/1/tickets", {
                userId: userId,
                password: password,
            }).then(response => {
                if (response.status === 201) {
                    // Authentication was successful so save the ticket in local storage
                    // and call onChange with an argument of true to indicate that authentication
                    // has been successful...
                    const success = setTicket(response.data.entry.id);
                    // localStorage.ticket = response.data.entry.id;
                    //this.onChange(success);
                    resolve(success);
                }
                else {
                    // If authentication failed for any reason call onChange with an argument
                    // of false to indicate that login has failed...
                    //this.onChange(false);
                    resolve(false);
                }
            })
                .catch(() => {
                    //this.onChange(false);
                    resolve(false);
                });
        }
    });
};

export const getTicket = () => {
    let ticket;
    try {
        if (localStorage) {
            ticket = localStorage.ticket;
        }
    }
    catch (e) {
        // Worth doing anything here?
    }
    return ticket;
};

export const setTicket = (ticket) => {
    let success = false;
    try {
        if (localStorage) {
            localStorage.ticket = ticket;
            success = true;
        }
    }
    catch (e) {
    }
    return success;
};

export const deleteTicket = () => {
    try {
        if (localStorage) {
            delete localStorage.ticket;
        }
    }
    catch (e) {
        // TODO: Worth doing anything here?
    }
};

export const logout = () => {
    return new Promise((resolve) => {
        axios.delete("/api/-default-/public/authentication/versions/1/tickets/-me-", getAxiosConfig())
            .then(response => {
                deleteTicket();
                //onChange(false);
                resolve(true);
            })
            .catch(() => {
                deleteTicket();
                //onChange(false);
                resolve(false);
            });
    });
};

export const loggedIn = () => {
    return !!this.getTicket();
};

export const getAxiosConfig = () => {
    return {
        headers: {authorization: "Basic " + btoa(getTicket())},
    };
};

export const onChange = () => {
};
