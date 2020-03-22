package api

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/labstack/echo"
	"net/http"
)

func (h *Handler) Status(ctx echo.Context) error {
	status := new(models.Message)
	status.Message = "I am okay."
	if err := ctx.Bind(status); err != nil {
		return err
	}
	return ctx.JSON(http.StatusOK, status)
}
