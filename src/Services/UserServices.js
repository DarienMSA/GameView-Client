import { axiosBase as axios } from "./Config";

export const GetAllExcept = async (id) => {
    try {
        const response = await axios.get("/user/except/" + id);
        if (response.status == 200) {
            return response.data;
        } else {
            return []
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const CreateUser = async (data) => {
    try {
        const response = await axios.post("/user", data);
        if (response.status == 200) {
            return response.data;
        } else {
            return []
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const UpdateUser = async (id, data) => {
    try {
        const response = await axios.put("/user/" + id, data);
        if (response.status == 200) {
            return response.data;
        } else {
            return []
        }
    } catch (err) {
        console.error(err);
        return err
    }
}

export const LogIn = async (email, pass) => {
    try {
        const response = await axios.get("/user/" + email + "/" + pass);
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

export const GetUser = async (id) => {
    try {
        const response = await axios.get("/user/" + id);
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

export const GetUserEmail = async (email) => {
    try {
        const response = await axios.get("/user/email/" + email);
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