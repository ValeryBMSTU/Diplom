package main

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/api"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/mv"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/consts"
	"github.com/labstack/echo"
	"log"
)

func main() {
	e := echo.New()
	h := &api.Handler{}

	e.Use(mv.CORS)

	if err := api.SetApi(e, h); err != nil {
		log.Fatal(err)
	}
	if err := e.Start(consts.Address); err != nil {
		log.Fatal(err)
	}

	e.Logger.Warnf("shutdown " + consts.Address)
}
