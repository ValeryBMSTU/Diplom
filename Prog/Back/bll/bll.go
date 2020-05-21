package bll

import (
	"errors"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/db"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
)

type Bll interface {
	RegNewUser(nickname, email, password string) (*models.User, error)
	LoginUser(email, password string) (*models.AuthInfo, error)
	AddUser(email, nickname, password string) (uint64, error)
	GetUserByID(ID uint64) (*models.User, error)
	GetUserByEmail(email string) (*models.User, error)
}

type UseCase struct {
	db db.DB
}

func NewUseCase(dataBase db.DB) Bll {
	return &UseCase{
		db: dataBase,
	}
}

func (u *UseCase) AddUser(nickname, email, password string) (uint64, error) {
	id, err := u.db.InsertUser(nickname, email, password)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (u *UseCase) RegNewUser(email, nickname, password string) (*models.User, error) {
	alreadyExistUser, _ := u.GetUserByEmail(email)
	if alreadyExistUser != nil {
		return nil, errors.New("user is already exist")
	}

	id, err := u.AddUser(email, nickname, password)
	if err != nil {
		return nil, err
	}

	NewUser, err := u.GetUserByID(id)
	if err != nil {
		return nil, err
	}

	return NewUser, nil
}

func (u *UseCase) LoginUser(email, password string) (*models.AuthInfo, error) {
	user, _ := u.GetUserByEmail(email)

	if password != user.Password {
		return nil, errors.New("incorrect email or password")
	}

	authInfo := models.AuthInfo{
		IsAuth: true,
		ID: user.ID,
		Nickname: user.Nickname,
		Ava: user.Ava,
	}

	return &authInfo, nil
}

func (u *UseCase) GetUserByID(ID uint64) (*models.User, error) {
	user, _ := u.db.SelectUserByID(ID)

	return user, nil
}

func (u *UseCase) GetUserByEmail(email string) (*models.User, error) {
	user, _ := u.db.SelectUserByEmail(email)

	return user, nil
}
