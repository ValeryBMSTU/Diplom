package api

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/labstack/echo"
	"net/http"
	"strconv"
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
	allUsers := []models.User{
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
		{
			Name:     "Kirik",
			Ava: "https://www.asdorural.com/upload/iblock/9c4/9c4cbce38ad2fddd7a592098692cf4d1.png",
			ID:       4,
			Status:   "Cookies is my life",
			Followed: true,
		},
		{
			Name:     "Jon",
			Ava: "https://www.asdorural.com/upload/iblock/9c4/9c4cbce38ad2fddd7a592098692cf4d1.png",
			ID:       5,
			Status:   "Cookies is not my life",
			Followed: false,
		},
		{
			Name:     "DoggyHunter",
			ID:       6,
			Status:   "Dildon THE great",
			Followed: true,
		},
		{
			Name:     "XXX",
			ID:       7,
			Status:   "Dildon THE great",
			Followed: true,
		},
	}

	currentPage, _ := strconv.Atoi(ctx.QueryParam("current_page"))
	count, _ := strconv.Atoi(ctx.QueryParam("count"))

	bot := (currentPage-1)*count
	top := currentPage*count
	if top > len(allUsers) {
		top = len(allUsers)
	}

	users := allUsers[bot:top]

	body := struct {
		Users []models.User `json:"users"`
		UsersCount int `json:"users_count"`
	}{users, len(allUsers)}

	meta := Meta{}

	return ctx.JSON(http.StatusOK, GeneralResp{body, meta})
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
