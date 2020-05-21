package db

import (
	"context"
	"fmt"
	"github.com/ValeryBMSTU/Diplom/Prog/Back/models"
	"github.com/jackc/pgx/v4"
	"os"
)

type DB interface {
	InsertUser(nickname, email, password string) (uint64, error)
	SelectUserByID(ID uint64) (*models.User, error)
	SelectUserByEmail(email string) (*models.User, error)
}

const InsertUserSQL = `INSERT INTO "user" (nickname, email, password) values ($1,$2,$3) RETURNING id`
const SelectUSerByIDSQL = `SELECT u.id, u.nickname, u.email, u.password from "user" as u where u.id = $1`
const SelectUserByEmailSQL = `SELECT u.id, u.nickname, u.email, u.password from "user" as u where u.email = $1`

type PostgresDB struct {
	conn *pgx.Conn
}

const ConnStr = "user=postgres password=7396 dbname=life_sim sslmode=disable" //"host=my_postgres user=postgres password=7396 dbname=life_sim sslmode=disable"

func NewDataBase() DB {
	pgxConn, err := pgx.Connect(context.Background(), ConnStr)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	return &PostgresDB{
		conn: pgxConn,
	}
}

func (db *PostgresDB) InsertUser(nickname, email, password string) (uint64, error) {
	var id uint64

	err := db.conn.QueryRow(context.Background(),
		InsertUserSQL, nickname, email, password).Scan(&id)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Can not insert User: %v\n", err)
		return 0, err
	}

	fmt.Fprintf(os.Stdout, "New User with id: %v\n", id)

	return id, nil
}

func (db *PostgresDB) SelectUserByID(ID uint64) (*models.User, error) {
	user := models.User{}

	err := db.conn.QueryRow(context.Background(),
		SelectUSerByIDSQL, ID).Scan(
		&user.ID,
		&user.Nickname,
		&user.Email,
		&user.Password)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Can not select User: %v\n", err)
		return nil, err
	}

	return &user, nil
}

func (db *PostgresDB) SelectUserByEmail(email string) (*models.User, error) {
	user := models.User{}

	err := db.conn.QueryRow(context.Background(),
		SelectUserByEmailSQL, email).Scan(
			&user.ID,
			&user.Nickname,
			&user.Email,
			&user.Password)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Can not select User: %v\n", err)
		return nil, err
	}

	return &user, nil
}