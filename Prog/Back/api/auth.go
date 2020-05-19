package api

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/labstack/echo"
	"net/http"
	"time"
)

var sessions []models.Session

func (h *Handler) Login(ctx echo.Context) error {
	email := ctx.QueryParam("email")
	password := ctx.QueryParam("password")

	var authInfo *models.AuthInfo

	for _, user := range allUsers {
		if email == user.Email && password == user.Password {
			authInfo = &models.AuthInfo{
				IsAuth: true,
				ID: user.ID,
				Login: user.Name,
				Ava: user.Ava,
			}
			break
		}
	}



	if authInfo == nil {
		errMsg := "User did not found"

		return ctx.JSON(http.StatusNotFound,
			GeneralResp{nil, Meta{Err: &errMsg}})
	}

	cookie := new(http.Cookie)

	cookie.Name = "key"
	cookie.Value = "123"

	cookie.Expires = time.Now().Add(24*30*time.Hour)

	sessions = append(sessions,
		models.Session{
		Key: cookie.Value,
		UserID: authInfo.ID,
		})

	ctx.SetCookie(cookie)

	body := struct {
		AuthInfo models.AuthInfo `json:"auth_info"`
	}{*authInfo}

	meta := Meta{}

	return ctx.JSON(http.StatusOK, GeneralResp{body, meta})
}

func (h *Handler) Reg(ctx echo.Context) error {
	ctx.String(http.StatusOK, ctx.Path()+" was hit")
	return nil
}
