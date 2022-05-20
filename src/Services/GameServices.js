import { axiosBase as axios } from "./Config";

export const GetGameID = async (id) => {
    try {
        const response = await axios.get("/game/" + id);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const IsUserActive = async (id, idUser) => {
    try {
        const response = await axios.get(`/game/active/${id}/${idUser}`);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const GetUserActiveGames = async (idUser) => {
    try {
        const response = await axios.get(`/game/activeGames/${idUser}`);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const GetGamesSortedBy = async (sortedBy) => {
    try {
        const response = await axios.get("/game/sort/" + sortedBy);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const GetGamesByName = async (v) => {
    try {
        const response = await axios.get("/game/searchName/" + v);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const GetGamesByCategory = async (v) => {
    try {
        const response = await axios.get("/game/genre/" + v);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const AddActiveUser = async (id, idUser) => {
    try {
        const response = await axios.put(`/game/${id}/addUser/${idUser}`);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const RemoveActiveUser = async (id, idUser) => {
    try {
        const response = await axios.put(`/game/${id}/removeUser/${idUser}`);
        if (response.status == 200) {
            return response.data;
        } else {
            return {}
        }
    } catch (err) {
        console.error(err);
        return err
    }
}