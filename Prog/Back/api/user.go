package api

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/labstack/echo"
	"net/http"
	"strconv"
	"time"
)

var allUsers = []models.User{
	{
		Name:     "Jon",
		ID:       0,
		Email: "email@mail.com",
		Password: "pass",
		Status:   "Cookies is my life",
		Followed: true,
	},
	{
		Name:     "Bob",
		Ava: "https://www.asdorural.com/upload/iblock/9c4/9c4cbce38ad2fddd7a592098692cf4d1.png",
		ID:       1,
		Email: "email@mail.com",
		Password: "pass",
		Status:   "Cookies is not my life",
		Followed: false,
	},
	{
		Name:     "Bilbo",
		ID:       2,
		Email: "email@mail.com",
		Password: "pass",
		Status:   "Dildon THE great",
		Followed: true,
	},
	{
		Name:     "Kirik",
		Ava: "https://www.asdorural.com/upload/iblock/9c4/9c4cbce38ad2fddd7a592098692cf4d1.png",
		ID:       3,
		Email: "kirikl@mail.com",
		Password: "kirik",
		Status:   "Cookies is my life",
		Followed: true,
	},
	{
		Name:     "Jon",
		Ava: "https://www.asdorural.com/upload/iblock/9c4/9c4cbce38ad2fddd7a592098692cf4d1.png",
		ID:       4,
		Email: "email@mail.com",
		Password: "pass",
		Status:   "Cookies is not my life",
		Followed: false,
	},
	{
		Name:     "DoggyHunter",
		ID:       5,
		Email: "email@mail.com",
		Password: "pass",
		Status:   "Dildon THE great",
		Followed: true,
	},
	{
		Name:     "XXX",
		ID:       6,
		Email: "email@mail.com",
		Password: "pass",
		Status:   "Dildon THE great",
		Followed: true,
	},
}

func (h *Handler) GetUsers(ctx echo.Context) error {
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
	allProfiles := []models.Profile{
		{
			ID:       700,
			Name:     "Jon",
			FullName: "John Wick",
			Email: "john-w@gmail.com",
			Status:   "Cookies is my life",
			Sims: []models.Sim{
				{
					ID: 1,
					Title: "The Butter",
					Description: "This sim is about my kitchen experience",
					StartTime: time.Now().Add(-time.Hour*24*365),
					EndTime: time.Time{},
				},
				{
					ID: 2,
					Title: "The Burger",
					Description: "The sim about my tasty breakfast",
					StartTime: time.Now().Add(-time.Hour*24*100),
					EndTime: time.Time{},
				},
				{
					ID: 3,
					Title: "Aloha",
					Description: "Sea and islands ",
					StartTime: time.Now().Add(-time.Hour*24*20),
					//EndTime: time.Now().Add(time.Hour*24*365*100),
					EndTime: time.Time{},
				},
			},
			Followed: false,
			IsBlocked: false,
		},
	}

	body  := struct {
		Profile models.Profile `json:"profile"`
	}{allProfiles[0]}

	meta := Meta{}

	return ctx.JSON(http.StatusOK, GeneralResp{body, meta})
}

func (h *Handler) GetSettings(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) SetSettings(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) GetSims(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}

func (h *Handler) Subscribe(ctx echo.Context) error {
	id, _ := strconv.Atoi(ctx.Param("id"))

	ctx.Param("id")

	allUsers[id].Followed = true

	body := struct{}{}

	meta := Meta{}

	return ctx.JSON(http.StatusOK, GeneralResp{body, meta})
}
