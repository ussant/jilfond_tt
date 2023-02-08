import * as React from "react";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, Typography} from "@mui/material";

type DeleteModalProps = {
    isOpen: boolean,
    handleClose: () => void,
    handleDelete: () => void,
    handleClickOpen: () => void,
}

export const DeleteModal = (props: DeleteModalProps): JSX.Element => (
	<Dialog
		open={props.isOpen}
		onClose={props.handleClose}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description">
		<DialogContent>
			<Typography>
				{"Do you want to delete this user?"}
			</Typography>
		</DialogContent>
		<DialogActions>
			<Button onClick={props.handleClose}>
                nope
			</Button>
			<Button onClick={props.handleDelete}>
                sure
			</Button>
		</DialogActions>
	</Dialog>
);
