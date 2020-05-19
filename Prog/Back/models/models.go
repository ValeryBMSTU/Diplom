package models

import (
	"time"
)

type Message struct {
	Message string `json:"msg"`
}

type AuthInfo struct {
	IsAuth bool `json:"is_auth"`
	ID uint64 `json:"id"`
	Login string `json:"login"`
	Ava string `json:"ava"`
}

type Session struct {
	Key string `json:"key"`
	UserID uint64 `json:"user_id"`
}

type User struct {
	ID        	uint64 `json:"id"`
	Email	  	string `json:"email"`
	Password 	string `json:"-"`
	Name	  	string `json:"name"`
	Ava       	string `json:"ava"`
	Status    	string `json:"status"`
	Followed  	bool   `json:"followed"`
	IsBlocked 	bool   `json:"is_blocked"`
}

type Profile struct {
	ID        	uint64   `json:"id"`
	Name	  	string   `json:"name"`
	FullName	string   `json:"full_name"`
	Login    	string 	 `json:"login"`
	Email	  	string 	 `json:"email"`
	Ava       	string   `json:"ava"`
	Status    	string   `json:"status"`
	Contacts	[]string `json:"contacts"`
	Sims 		[]Sim	 `json:"sims"`
	Followed  	bool     `json:"followed"`
	IsBlocked 	bool     `json:"is_blocked"`
}

//type Contacts []string

type Sim struct {
	ID 			uint64 `json:"id"`
	Title 		string `json:"title"`
	Description string `json:"desc"`
	StartTime	time.Time `json:"start_time"`
	EndTime		time.Time `json:"end_time"`
}

