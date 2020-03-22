package main

import (
	"fmt"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/consts"
	"github.com/labstack/echo"
)

func main() {
	fmt.Println("I love you...")

	e := echo.New()

	e.Logger.Warnf("shutdown " + consts.Addr)
}

