import { useNavigate } from "@solidjs/router";
import { createSignal, mapArray } from "solid-js";
import { createTheDB } from './utils/db';

const db= await createTheDB();

export default async() => {
    const navigate = useNavigate();

    const createTrip = async() => {
        const id = await db?.add("trips", {title: "My New Trip", date: new Date()});
        navigate(`/trip/${id}`, { replace: true });
    }
    const [trips, setTrips] = createSignal([] as {date: Date; title: string;}[]);
    const t = await db?.getAllFromIndex('trips', 'date');
    console.log(t)
    if(t) setTrips(t);
    console.log(trips());
    return(
        <>
            <button onClick={createTrip}>Create Trip</button>
            {/* {// @ts-ignore 
            mapArray(trips(), (trip as {date: Date; title: string;}, index) => {
                return(
                <>
                    <p>{trip.title}</p>
                    <p>{trip.id}</p>
                </>
                )
            })} */}
        </>
  )
  }
