package uc

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/labstack/echo"
)

type IUsecase interface {
	GetUsers(ctx echo.Context) (error, *models.User)
	GetUserByID(ctx echo.Context, ID uint64) (error, *models.User)
	GetUserByLogin(ctx echo.Context, login string) (error, *models.User)
	GetUserByEmail(ctx echo.Context, email string) (error, *models.User)

	Login(ctx echo.Context, login, password string) (error, *models.Profile)
	Reg(ctx echo.Context, login, email, password string) (error, *models.Profile)

	GetProfile(ctx echo.Context) (error, *models.Profile)
	SetProfile(ctx echo.Context, login, email, ava, password string) (error, *models.Profile)

	GetSims(ctx echo.Context) (error, *[]models.Sim)
}
