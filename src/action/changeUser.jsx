const fetchUserDataMock = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: 'Петр',
				age: 55,
			});
		}, 2500);
	});
};

export const changeUserAsync = (dispatch) =>
	fetchUserDataMock().then((userDataFromServer) =>
		dispatch({
			type: 'CHNAGE_USER',
			payload: userDataFromServer,
		}),
	);
