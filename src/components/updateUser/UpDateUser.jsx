import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
// import { TransitionProps } from "@mui/material/transitions";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>,
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function UpdateUser() {
  const [open, setOpen] = React.useState(false);

  const userData = localStorage.getItem("Users");
  const user = JSON.parse(userData);
  //   console.log(user._id,'hslodidf')
  //   const userEmail = user.email;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const [currentPassword, setCurrentPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put("/update/user", {
        userId: user._id,
        newEmail,
        newPassword,
      });
      console.log(response,'resdf')
      if (response.status === 200) {
        toast.success("User updated successfully");
      }
    } catch (error) {
      toast.error("Error updating user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change User
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": { padding: "20px", minHeight: "400px" },
        }}
      >
        <DialogTitle>{"Update User Details"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleUpdate}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {/* <div>
              <label>Current Password:</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </div> */}
            <div>
              <label>New Email:</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                style={{ marginLeft: "47px", padding: "5px" }}
              />
            </div>
            <div>
              <label>New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ marginLeft: "27px", padding: "5px" }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 2, padding: "10px 20px" }}
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ padding: "10px 20px" }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
