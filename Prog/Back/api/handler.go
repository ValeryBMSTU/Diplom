package api

import "github.com/labstack/echo"
import "github.com/ValeryBMSTU/Diplom/Prog/Back/bll"

type IHandler interface {
	/* status */
	Status(ctx echo.Context) error // Проверка статуса сервера

	/* auth */
	Login(ctx echo.Context) error       // Авторизация
	Reg(ctx echo.Context) error         // Регистрация

	/* user */
	GetUsers(ctx echo.Context) error    // Получение списка пользователей
	GetUser(ctx echo.Context) error     // Получение пользователя
	GetProfile(ctx echo.Context) error  // Получение профиля пользователя
	GetSettings(ctx echo.Context) error // Получение настроек профиля текущего пользователя
	SetSettings(ctx echo.Context) error // Изменение настроек текущего пользователя
	GetSims(ctx echo.Context) error     // Получение списка симуляций текущего пользователя
	Subscribe(ctx echo.Context) error   // Подписка на пользователя

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
	bll bll.Bll
}

func NewHandler(useCase bll.Bll) IHandler {
	return &Handler{
		bll: useCase,
	}
}

func SetApi(e *echo.Echo, h IHandler) error {
	e.GET("/status", h.Status)

	e.POST("/users/login", h.Login)
	e.POST("/users/reg", h.Reg)

	e.GET("/users", h.GetUsers)
	e.GET("/users/:id", h.GetUser)
	e.GET("/users/:id/profile", h.GetProfile)
	e.GET("/users/:id/settings", h.GetSettings)
	e.PUT("/users/:id/settings", h.SetSettings)
	e.GET("/users/:id/sims", h.GetSims)
	e.POST("/users/:id/subscribe", h.Subscribe)

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
