import React, {FormEvent, useState} from "react";
import {Grid, Typography, Button} from "@mui/material";
import "./styles.scss";
import {User} from "../../types";
import {EditModal} from "../../components/editModal/editModal";
import {DeleteModal} from "../../components/deleteModal/deleteModal";

type UsersProps = {
    users: Array<User>,
    deleteUser: (id: number) => void,
    updateUser: (user: User) => void,
}

export const UsersComponent = (props: UsersProps):JSX.Element => {
	const [currentId, setCurrentId] = useState<number>(-1);
	const [isOpenEditModal, setOpenEditModal] = useState<boolean>(false);
	const [isOpenDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
	const [currentEditingUser, setCurrentEditingUser] = useState<User | null>(null);

	const closeEditModal = (): void => setOpenEditModal(false);

	const openDeleteModal = (): void => setOpenDeleteModal(true);
    
	const handleOpenEditModal = (user: User): void => {
		setCurrentEditingUser(user);
		setOpenEditModal(true);
	};

	const handleOpenDeleteModal = (id: number): void => {
		setOpenDeleteModal(true);
		setCurrentId(id);
	};

	const closeDeleteModal = (): void => setOpenDeleteModal(false);

	const handleDeleteModal = (): void => {
		props.deleteUser(currentId);
		closeDeleteModal();
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = data.get("name") as string;
		const phone = data.get("phone") as string;
		const email = data.get("email") as string;

		if (currentEditingUser && !(currentEditingUser?.name === name
            && currentEditingUser?.email === email
            && currentEditingUser?.phone === phone)
		) {
			props.updateUser(
				{...currentEditingUser, name, email, phone});
			setOpenEditModal(false);
			return;
		}

		setOpenEditModal(false);
	};

	return (
		<Grid container className={"container"}>
			{
				props.users.map(user => {
					return  (
						<Grid item key={user.id} className={"container__item"}>
							<div className={"container__textWrapper"}>
								<Typography variant={"inherit"}>{"name: "}</Typography>
								<Typography>{user.name}</Typography>
							</div>
							<div className={"container__textWrapper"}>
								<Typography variant={"inherit"}>{"email: "}</Typography>
								<Typography>{user.email}</Typography>
							</div>
							<div className={"container__textWrapper"}>
								<Typography variant={"inherit"}>{"phone: "}</Typography>
								<Typography>{user.phone}</Typography>
							</div>
							<div>
								<Button
									disableElevation
									size={"small"}
									variant={"outlined"}
									className={"container__button"}
									onClick={() => handleOpenEditModal(user)}>
									{"Edit"}
								</Button>
								<Button
									disableElevation
									size={"small"}
									color={"error"}
									variant={"outlined"}
									className={"container__button"}
									onClick={() => handleOpenDeleteModal(user.id)}>
									{"Delete"}
								</Button>
							</div>
						</Grid>
					);
				})
			}
			<DeleteModal
				isOpen={isOpenDeleteModal}
				handleClickOpen={openDeleteModal}
				handleDelete={handleDeleteModal}
				handleClose={closeDeleteModal} />
			<EditModal
				initialData={currentEditingUser}
				handleSubmit={handleSubmit}
				isOpen={isOpenEditModal}
				handleClose={closeEditModal} />
		</Grid>
	);
};
