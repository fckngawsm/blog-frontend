import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import { useForm } from "react-hook-form";

import styles from "./Login.module.scss";
import { UserType } from "../../types/User";
import { useAppDispatch } from "../../redux-hooks";
import { registerUser } from "../../features/auth/auth-slice";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit = (data: UserType) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        navigate("/login");
      });
  };
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
          label="Полное имя"
          {...register("name", { required: true, minLength: 2, maxLength: 40 })}
          fullWidth
        />
        <TextField
          className={styles.field}
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register("email", {
            required: true,
            minLength: 5,
            maxLength: 40,
          })}
          label="E-Mail"
          type="email"
          fullWidth
        />
        <TextField
          className={styles.field}
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 40,
          })}
          label="Пароль"
          type="password"
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};
