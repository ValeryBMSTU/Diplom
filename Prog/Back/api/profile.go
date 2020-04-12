package api

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/labstack/echo"
	"net/http"
)

func (h *Handler) Login(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) Reg(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) GetUsers(ctx echo.Context) error {
	u := []models.User{
		{
			Name:     "Jon",
			ID:       1,
			Status:   "Cookies is my life",
			Followed: true,
		},
		{
			Name:     "Bob",
			Ava: "https://www.asdorural.com/upload/iblock/9c4/9c4cbce38ad2fddd7a592098692cf4d1.png",
			ID:       2,
			Status:   "Cookies is not my life",
			Followed: false,
		},
		{
			Name:     "Bilbo",
			ID:       3,
			Status:   "Dildon THE great",
			Followed: true,
		},
	}

	return ctx.JSON(http.StatusOK, u)
}

func (h *Handler) GetUser(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) GetProfile(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) SetProfile(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) GetSims(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}
