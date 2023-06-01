// import React, { useContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import userService from "../services/user.service";
// import { toast } from "react-toastify";
// import { useAuth } from "./useAuth";

// const UserContext = React.createContext();

// export const useUser = () => {
//     return useContext(UserContext);
// };

// const UserProvider = ({ children }) => {
//     const [users, setUsers] = useState([]);
//     const [isLoading, setLoading] = useState(true);
//     const { currentUser } = useAuth();
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         getUsers();
//     }, []);
//     useEffect(() => {
//         setUsers((prev) =>
//             prev.map((u) => (u._id === currentUser._id ? currentUser : u))
//         );
//     }, [currentUser]);
//     useEffect(() => {
//         if (error !== null) {
//             toast(error);
//             setError(null);
//         }
//     }, [error]);
//     async function getUsers() {
//         try {
//             const { content } = await userService.get();
//             setUsers(content);
//             setLoading(false);
//         } catch (error) {
//             errorCatcher(error);
//         }
//     }
//     function getCurrentUser(id) {
//         return users.find((user) => user._id === id);
//     }
//     function errorCatcher(error) {
//         const { message } = error.response.data;
//         setError(message);
//         setLoading(false);
//     }
//     return (
//         <UserContext.Provider value={{ users, getCurrentUser }}>
//             {!isLoading ? children : "Loading..."}
//         </UserContext.Provider>
//     );
// };

// UserProvider.propTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.node),
//         PropTypes.node
//     ])
// };

// export default UserProvider;
