package models

import "time"

type Message struct {
	Message string `json:"msg"`
}

type User struct {
	ID        uint64 `json:"id"`
	Login     string `json:"login"`
	Ava       string `json:"ava"`
	IsBlocked bool   `json:"is_blocked"`
}

type Profile struct {
	ID		  uint64 `json:"id"`
	Login     string `json:"login"`
	Email	  string `json:"email"`
	Ava       string `json:"ava"`
	IsBlocked bool   `json:"is_blocked"`
}

type Sim struct {
	ID string `json:"id"`
	Title string `json:"title"`
	StartTime	time.Time `json:"start_time"`
	EndTime		time.Time `json:"end_time"`
}

