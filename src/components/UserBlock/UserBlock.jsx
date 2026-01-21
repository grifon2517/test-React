import { UserPersInfo, UserContacts } from './components';

export const UserBlock = () => {
	return (
		<div>
			<h2>Пользователь:</h2>
			<UserPersInfo></UserPersInfo>
			<UserContacts></UserContacts>
		</div>
	);
};
