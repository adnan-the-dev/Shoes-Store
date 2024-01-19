import { Box, Button, Divider, Typography } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { AlertBox, AlertBoxParagraph, AlertBoxTage, ArrowBox, ButtonBox, CancelAndSaveBtn, EmailMainBox, InputLable, MailBox, MainInputCityBox, MainZipCodeBox, UserTextField } from "./styled-component";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postRegisterApi } from "../../api/signApi/signUpApi";

export const SignUp = () => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      username: data.username,
      password: data.password,
      email: data.email,
      isAdmin: data.isAdmin,
      street: data.address,
      city: data.city,
      state: data.stateProvince,
      country: data.country,
      postalCode: data.postalCode,
    }
    const res = await postRegisterApi(formData)
        navigate('/login')
        toast.success("User Register")
  };
  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            // maxWidth: "600px",
            // margin: "auto",
            padding: "4rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
            "& fieldset": { border: 'none' },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Register
            <IoIosInformationCircleOutline size={18} />

          </Typography>
          <Divider sx={{ marginTop: "12px" }} />
          <Box style={{ marginTop: "17px", padding: '12px 0px' }}>
            <InputLable>First Name</InputLable>
            <UserTextField
              fullWidth
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            <InputLable>password</InputLable>
            <UserTextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              sx={{ mt: 2 }}
            />
            <InputLable>Email</InputLable>
            <EmailMainBox>
              <MailBox>
                <MdOutlineMail size={19} />
              </MailBox>
              <UserTextField
                fullWidth
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </EmailMainBox>
            <InputLable>Street Address</InputLable>
            <UserTextField
              fullWidth
              {...register("address", {
                required: "Address is required",
              })}
            />
            <InputLable>City</InputLable>
            <MainInputCityBox>
              <UserTextField
                fullWidth
                placeholder="Log Angeles"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <ArrowBox>
                <IoIosArrowUp size={14} />
                <IoIosArrowDown size={14} />
              </ArrowBox>
            </MainInputCityBox>
            <InputLable>State/Province</InputLable>
            <UserTextField
              fullWidth
              placeholder="California"
              {...register("stateProvince", {
                required: "StateProvince is required",
              })}
            />
            <InputLable>Country</InputLable>
            <UserTextField
              fullWidth
              placeholder="United States"
              {...register("country", {
                required: "Country is required",
              })}
            />
            <MainZipCodeBox>
              ZIP/Postal Code
              <IoIosInformationCircleOutline size={18} />
            </MainZipCodeBox>
            <UserTextField
              fullWidth
              placeholder="8675"
              {...register("PostalCode", {
                required: "ZIP/Postal Code is required",
              })}
            />
            <AlertBox>
              <AlertBoxTage>Alerts</AlertBoxTage>
              <AlertBoxParagraph>Get updates of any new activity or features. Turn on/off your preferences</AlertBoxParagraph>
            </AlertBox>
            <ButtonBox>
              <CiCircleCheck size={17} strokeWidth='1' color='#17d781' marginTop='1rem' />
              <CancelAndSaveBtn
                onClick={() => reset()}
              >
                Cancel
              </CancelAndSaveBtn>
              <CancelAndSaveBtn
                type="submit"
                savebtn={true}
              >
                Save
              </CancelAndSaveBtn>
            </ButtonBox>
          </Box>
        </Box>
      </Box >
    </>
  );
};
