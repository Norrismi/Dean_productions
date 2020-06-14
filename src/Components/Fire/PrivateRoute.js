// import React, { useContext } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";

// export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//   const { currentUser } = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !!currentUser ? <RouteComponent {...props} /> : <Redirect to={"/"} />
//       }
//     />
//   );
// };

// export default PrivateRoute;



import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { currentUser } = useContext(AuthContext);
	// console.log(currentUser);
	return (
		<Route
			{...rest}
			render={routeProps =>
				!!currentUser ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to={'/'} />
				)
			}
		/>
	);
};

export default PrivateRoute;