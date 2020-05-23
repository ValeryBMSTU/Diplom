package main

import (
	"github.com/ValeryBMSTU/Diplom/Prog/Back/api"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/bll"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/consts"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/db"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/mv"
	"github.com/labstack/echo"
	"log"
)

func main() {
	e := echo.New()
	dataBase := db.NewDataBase()
	useCase := bll.NewUseCase(dataBase)
	handler := api.NewHandler(useCase)

	e.Use(mv.CORS)

	if err := api.SetApi(e, handler); err != nil {
		log.Fatal(err)
	}
	if err := e.Start(consts.Address); err != nil {
		log.Fatal(err)
	}

	e.Logger.Warnf("shutdown " + consts.Address)
}
