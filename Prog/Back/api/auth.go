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

	authInfo, err := h.bll.LoginUser(email, password)
	if err != nil {
		errMsg := err.Error()
		return ctx.JSON(http.StatusBadRequest, GeneralResp{nil, Meta{
			Err: &errMsg,
		}})
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
	nickname := ctx.QueryParam("nickname")
	email := ctx.QueryParam("email")
	password := ctx.QueryParam("password")

	newUser, err := h.bll.RegNewUser(nickname, email, password)
	if err != nil {
		errMsg := err.Error()
		return ctx.JSON(http.StatusBadRequest, GeneralResp{nil, Meta{
			Err: &errMsg,
		}})
	}

	authInfo, err := h.bll.LoginUser(newUser.Email, newUser.Password)
	if err != nil {
		errMsg := err.Error()
		return ctx.JSON(http.StatusBadRequest, GeneralResp{nil, Meta{
			Err: &errMsg,
		}})
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
