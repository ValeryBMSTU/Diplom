package api

import "github.com/labstack/echo"

type IHandler interface {
	/* status */
	Status(ctx echo.Context) error // Проверка статуса сервера

	/* profile */
	Login(ctx echo.Context) error      // Авторизация
	Reg(ctx echo.Context) error        // Регистрация
	GetUser(ctx echo.Context) error    // Получение профилья другого пользователя
	GetProfile(ctx echo.Context) error // Получение профиля текущего пользователя
	SetProfile(ctx echo.Context) error // Изменение профиля текущего пользователя
	GetSims(ctx echo.Context) error    // Получение списка симуляций текущего пользователя

	/* sim */
	Start(ctx echo.Context) error  // Запуск моделирования
	Config(ctx echo.Context) error // Настройка моделирования
	Stop(ctx echo.Context) error   // Остановка моделирования
	End(ctx echo.Context) error    // Завершение моделирования

	/* chat */
	Send(ctx echo.Context) error // Отправка сообщения
	List(ctx echo.Context) error // Получение списка сообщений

	/* admin */
	Block(ctx echo.Context) error   // Блокировка пользователя
	Unblock(ctx echo.Context) error // Разблокировка пользователя
	Delete(ctx echo.Context) error  // Удаление пользователя
	Restore(ctx echo.Context) error // Восстановление пользователя
}

type Handler struct {
}

func SetApi(e *echo.Echo, h IHandler) error {
	e.GET("/status", h.Status)

	e.POST("/users/login", h.Login)
	e.POST("/users/reg", h.Reg)
	e.GET("/users/:id", h.GetUser)
	e.GET("/users/profile", h.GetProfile)
	e.PUT("/users/profile", h.SetProfile)
	e.GET("/users/sims", h.GetSims)

	e.POST("/sims/start", h.Start)
	e.PUT("/sims/config/:id", h.Config)
	e.POST("/sims/stop/:id", h.Stop)
	e.POST("/sims/end/:id", h.End)

	e.POST("/chat/send/:id", h.Send)
	e.GET("/chat/list", h.List)

	e.POST("/admin/block/:id", h.Block)
	e.POST("/admin/unblock/:id", h.Unblock)
	e.POST("/admin/delete/:id", h.Delete)
	e.POST("/admin/restore/:id", h.Restore)

	return nil
}
