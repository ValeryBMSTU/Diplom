package flat

type Config struct {
	XSize uint32
	YSize uint32

	MaxCount uint32
	MaxEnergy uint32
	MaxSteps uint32


	StartCount uint32
	StartGenome map[byte]byte
	StartEnergy uint32

	Commands map[string]func()
}