package api

type GeneralResp struct {
	Body interface{} `json:"body"`
	Meta Meta `json:"meta"`
}

type Meta struct {
	Err *string `json:"err"`
	Msg *string `json:"msg"`
}
