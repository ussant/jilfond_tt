import React, {FormEvent} from "react";
import {
	Button,
	Dialog,
	DialogContent,
	Typography,
	Box,
	TextField,
} from "@mui/material";
import "./styles.scss";
import {User} from "../../types";

type ModalProps = {
    isOpen: boolean,
    handleClose: () => void,
    initialData: User | null,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,

}

export const EditModal = (props: ModalProps): JSX.Element => {
	return (
		<Dialog
			open={props.isOpen}
			onClose={props.handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<DialogContent>
				<Typography>{"user editing"}</Typography>
				<Box component="form" onSubmit={props.handleSubmit} noValidate>
					<TextField
						defaultValue={props.initialData?.name}
						margin="normal"
						required
						fullWidth
						id="name"
						label="user name"
						name="name"
						autoComplete="name"
						autoFocus
					/>
					<TextField
						defaultValue={props.initialData?.phone}
						margin="normal"
						required
						fullWidth
						name="phone"
						label="phone number"
						type="tel"
						id="phone"
						autoComplete="phone"
					/>
					<TextField
						defaultValue={props.initialData?.email}
						margin="normal"
						required
						fullWidth
						id="email"
						label="email address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<div className={"buttonsWrapper"}>
						<Button onClick={props.handleClose}>
                            close
						</Button>
						<Button type={"submit"}>
                            save
						</Button>
					</div>
				</Box>
			</DialogContent>
		</Dialog>
	);
};
