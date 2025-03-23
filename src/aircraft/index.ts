import { Aircraft } from "./Aircraft"
import { Airplane } from "./Airplane"
import { Helictopter } from "./Helictopter"


const aircraft = new Aircraft('Boeing 747', 400)

aircraft.fly()
aircraft.land()

const airplane = new Airplane('Airbus A320', 200)
airplane.fly()
airplane.land()

const helicopter = new Helictopter('Bell 407', 4)
helicopter.fly()

